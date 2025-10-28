import os
import shutil

os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f"Current working directory: {os.getcwd()}")

os.system("dotnet publish -c Release")

print("Build completed")

if os.path.exists("../_framework"):
    try:
        shutil.rmtree("../_framework")
        print("Removed existing _framework directory")
    except Exception as e:
        print(f"Error removing _framework directory: {e}")
        os._exit(1)

try:
    shutil.copytree("bin/Release/net10.0/publish/wwwroot/_framework", "../_framework")
    print("Copied new _framework directory")
except Exception as e:
    print(f"Error copying _framework directory: {e}")
    os._exit(1)