import os
import shutil

os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f"Current working directory: {os.getcwd()}")

os.system("dotnet publish -c Debug")

print("Build completed")

if os.path.exists("../lib"):
    try:
        shutil.rmtree("../lib")
        print("Removed existing lib directory")
    except Exception as e:
        print(f"Error removing lib directory: {e}")
        os._exit(1)

try:
    shutil.copytree("bin/Debug/net10.0/publish/wwwroot", "../lib")
    print("Copied new lib directory")
except Exception as e:
    print(f"Error copying lib directory: {e}")