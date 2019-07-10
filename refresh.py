import os
lists = [
'css',
'favicon.ico',
'fonts',
'img',
'index.html',
'js',]
base = "D:\\project\\zhifou\\web\\"
os.system("npm run build")
print("build finish")
files = [i for i in os.listdir(base) if i in lists]
for i in files:
    try:
        os.remove(base + i)
    except Exception as e:
        os.system("del /q " + base + i)
        if os.path.isdir(base + i):
            os.system("rd "+ base +i)
print("remove old finish")
os.system("powershell cp -r D:\\project\\zhihu\\dist\\* D:\\project\\zhifou\\web")
print("copy new finish")