import math
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
import numpy as plot
import cmath
from matplotlib.lines import Line2D
fig = plt.figure()
ax = fig.add_subplot(111,projection='3d')
#figure,ax = plt.subplots()
n = 1
def a(x,y,yy,z):#层数,方向,方向,正负
    if x>0:
        a(x-1,y,yy,z)#1
        dm(y,yy,n)##1
        a(x-1,y,yy,-z)#2
        dm(y,yy,n)##2
        a(x-1,y,yy,z)#3
        dm(y+(-90*z),yy,n)##3
        a(x-1,y-180*z,yy,-z)#4
        dm(180+y,yy,n)##4
        a(x-1,y-180*z,yy,z)#5
        dm(180+y,yy,n)##5
        a(x-1,y-180*z,yy,-z)#6
        dm(y+(-90*z),yy,n)##6
        a(x-1,y,yy,z)#7
        dm(y,yy,n)##7
        a(x-1,y,yy,-z)#8
        dm(y,yy,n)##8
        a(x-1,y,yy,z)     
        dm(y-90*z,yy+90*z,n)      
        a(x-1,y+180,yy,z)#1
        dm(y-180,yy,n)
        a(x-1,y+180,yy,-z)#2
        dm(y-180,yy,n)
        a(x-1,y+180,yy,z)#3
        dm(y+(90*z),yy,n)
        a(x-1,y,yy,-z)#4
        dm(y,yy,n)
        a(x-1,y,yy,z)#5
        dm(y,yy,n)
        a(x-1,y,yy,-z)#6
        dm(y+(90*z),yy,n)
        a(x-1,y+180,yy,z)#7
        dm(y+180,yy,n)
        a(x-1,y+180,yy,-z)#8
        dm(y+180,yy,n)
        a(x-1,y-180,yy,z)
        dm(y-90*z,yy+90*z,n)
        a(x-1,y,yy,z)#1
        dm(y,yy,n)##1
        a(x-1,y,yy,-z)#2
        dm(y,yy,n)##2
        a(x-1,y,yy,z)#3
        dm(y+(-90*z),yy,n)##3
        a(x-1,y-180*z,yy,-z)#4
        dm(180+y,yy,n)##4
        a(x-1,y-180*z,yy,z)#5
        dm(180+y,yy,n)##5
        a(x-1,y-180*z,yy,-z)#6
        dm(y+(-90*z),yy,n)##6
        a(x-1,y,yy,z)#7
        dm(y,yy,n)##7
        a(x-1,y,yy,-z)#8
        dm(y,yy,n)##8
        a(x-1,y,yy,z)
def dm(d,dd,j):
    d = ((math.pi)/180)*d
    dd = ((math.pi)/180)*dd
    i = [math.cos(d)*j*math.cos(dd),math.sin(d)*j*math.cos(dd),math.sin(dd)*j]
    #print(i)
    mo.append([(mo[-1][0]+i[0]),(mo[-1][1]+i[1]),(mo[-1][2]+i[2])])
mo = [[0,0,0]]
a(2,90,0,1)
for i in range(len(mo)-1):
    ax.plot3D(((mo[i][0]),(mo[i+1][0])),((mo[i][1]),(mo[i+1][1])),((mo[i][2]),(mo[i+1][2])),c='r')
    #ax.scatter(mo[i][0],mo[i][1],mo[i][2])
    #print(i)
plt.show()
