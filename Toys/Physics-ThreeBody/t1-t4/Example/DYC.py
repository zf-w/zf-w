str1 = "DYC大佬"

str2 = "-"
def remove(a):#一个小测试,非最简方案
    global str1
    str0 = ""
    i = 0
    while i<len(str1):
        if i == a:
            i = i+1
        else:
            str0 = str0 + str1[i]
            i = i+1
    str1 = str0
    print(str1)
while 1>0:
    j = 0
    while j<100:
        str1 = str2+str1
        print (str1)
        j = j+1
    j = 0
    while j<100:
        remove(0)
        j = j+1
    str1 = "DYC大佬"




        
        
    
    
