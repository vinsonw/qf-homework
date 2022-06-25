import os
_src = "."
_ext_list = [".jpg",".png"]
for i,filename in enumerate(os.listdir(_src)):
    for _ext in _ext_list:
        if filename.endswith(_ext):
            os.rename(filename, 'c'+str(i)+_ext)