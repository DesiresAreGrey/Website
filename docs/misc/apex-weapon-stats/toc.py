from mkdocs.structure.toc import AnchorLink

def on_page_content(html, page, **kwargs):
    if page.file.src_uri == "misc/apex-weapon-stats/index.md":
        for link in page.toc:
            link.children.append(AnchorLink('Settings', 'settings', 0))

            weapon = AnchorLink('Weapon', 'weapon', 0)

            weapon.children.append(AnchorLink('Ammo', 'ammo', 0))

            firing = AnchorLink('Firing', 'firing', 0)
            shot = AnchorLink('Shot', 'shot', 0)
            
            shot.children.append(AnchorLink('Projectile Damage', 'projectile-damage', 0))
            shot.children.append(AnchorLink('Shot Damage', 'shot-damage', 0))

            shot.children.append(AnchorLink('Shots to Kill', 'shots-to-kill', 0))
            shot.children.append(AnchorLink('Damage Per Second', 'dps', 0))
            shot.children.append(AnchorLink('Total Damage Per Magazine', 'tdpm', 0))
            shot.children.append(AnchorLink('Time To Kill', 'ttk', 0))
            shot.children.append(AnchorLink('Projectile Size', 'projectile-size', 0))

            firing.children.append(shot)
            
            firing.children.append(AnchorLink('Patterns', 'patterns', 0))

            weapon.children.append(firing)
            
            weapon.children.append(AnchorLink('Reload Time', 'reload-time', 0))
            
            weapon.children.append(AnchorLink('Handling', 'handling', 0))

            weapon.children.append(AnchorLink('Spread', 'spread', 0))

            link.children.append(weapon)

            link.children.append(AnchorLink('Info', 'info', 0))