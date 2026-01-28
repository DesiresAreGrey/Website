import os
import hashlib
import re
import logging
import sys

log = logging.getLogger("mkdocs")

hash_dirs = [
    "js",
    "stylesheets",
    "misc",
    "surveys/4tran2025",
]

blacklist_contains = [
    "lib/_framework"
]
def in_contains_blacklist(file_path): return any(f in file_path.replace('\\', '/') for f in blacklist_contains)

def get_file_hash(filepath):
    hasher = hashlib.md5()
    with open(filepath, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()[:8]

def on_post_build(config, **kwargs):
    if "serve" in sys.argv:
        log.info("Skipping css/js hashing during serve.")
        return
    
    site_dir = config['site_dir']
    
    asset_map = {}
    
    for dir in hash_dirs:
        log.info("Hashing all css/js" if dir == "" else f"Hashing css/js in directory: {dir}")
        for root, _, files in os.walk(os.path.join(site_dir, dir)):
            for filename in files:
                if filename.endswith(('.css', '.js')):
                    file_path = os.path.join(root, filename)
                    if in_contains_blacklist(file_path):
                        log.info(f"  Skipping hashing for blacklisted file: {file_path}")
                        continue
                    
                    file_hash = get_file_hash(file_path)
                    name, ext = os.path.splitext(filename)
                    if name.endswith(".min"):
                        name = name[:-4]
                        ext = ".min" + ext
                    new_filename = f"{name}.{file_hash}{ext}"

                    rel_dir = os.path.relpath(root, site_dir).replace('\\', '/')
                    if rel_dir == ".":
                        rel_dir = ""

                    old_rel_path = f"{rel_dir}/{filename}" if rel_dir else filename
                    new_rel_path = f"{rel_dir}/{new_filename}" if rel_dir else new_filename

                    asset_map[old_rel_path] = new_rel_path

                    new_file_path = os.path.join(root, new_filename)
                    os.rename(file_path, new_file_path)
                    log.info(f"  {old_rel_path} -> {new_rel_path}")

    sorted_assets = sorted(asset_map.keys(), key=len, reverse=True)

    count = 0
    for root, _, files in os.walk(site_dir):
        for filename in files:
            if filename.endswith(('.html', '.css', '.js')):
                file_path = os.path.join(root, filename)

                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                original_content = content
                for old_name in sorted_assets:
                    new_name = asset_map[old_name]
                    old_basename = os.path.basename(old_name)
                    new_basename = os.path.basename(new_name)

                    if old_name in content:
                        content = content.replace(old_name, new_name)
                    elif old_basename in content:
                        pattern = r'(["\'\(\s/])' + re.escape(old_basename) + r'(["\'\)\s?])'
                        content = re.sub(
                            pattern, 
                            lambda m: m.group(1) + new_basename + m.group(2), 
                            content
                        )

                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    count += 1
                    
        if dir == "":
            break

    log.info(f"Updated references in {count} files.")