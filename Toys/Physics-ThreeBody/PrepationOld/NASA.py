import math
import random
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
import numpy as plot
import cmath
from matplotlib.lines import Line2D
fig = plt.figure()
ax = fig.add_subplot(111,projection='3d')
coor_sun=[10,-10,0]
ax.scatter(0,0,0)
dh_a = 0
dv_a = 0
mo_a = [[100,100,100]]#初始位置
#ax.scatter((mo_a[0][0]),(mo_a[0][1]),(mo_a[0][2]))
def mov_a(f,dh,dv):
    dh = ((math.pi)/180)*dh#一个三维极坐标的移动转三维坐标的变化
    dv = ((math.pi)/180)*dv
    i = [math.cos(dh)*f*math.cos(dv),math.sin(dh)*f*math.cos(dv),math.sin(dv)*f]
    mo_a.append([(mo_a[-1][0]+i[0]),(mo_a[-1][1]+i[1]),(mo_a[-1][2]+i[2])])
def dh_a(x,y,z):#dh_a = 180*((math.atan((y-mo_a[-1][1])/(x-mo_a[-1][0])))/math.pi)
    if((y-mo_a[-1][1])<0 and (x-mo_a[-1][0])<0):
        dh_a = 180*((math.atan((y-mo_a[-1][1])/(x-mo_a[-1][0])))/math.pi)
    if((y-mo_a[-1][1])<0 and (x-mo_a[-1][0])>0):
        dh_a = 180*((math.atan((y-mo_a[-1][1])/(x-mo_a[-1][0])))/math.pi)-180
    if((y-mo_a[-1][1])>0 and (x-mo_a[-1][0])>0):
        dh_a = 180*((math.atan((y-mo_a[-1][1])/(x-mo_a[-1][0])))/math.pi)-180
    if((y-mo_a[-1][1])>0 and (x-mo_a[-1][0])<0):
        dh_a = 180*((math.atan((y-mo_a[-1][1])/(x-mo_a[-1][0])))/math.pi)
    
    return dh_a
def dv_a(x,y,z):#180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
    if((y-mo_a[-1][1])<0 and (x-mo_a[-1][0])<0):
        print(1)
        if(z-(mo_a[-1][0])<0):
            dv_a = -180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
        else:
            dv_a = 180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
    if((y-mo_a[-1][1])<0 and (x-mo_a[-1][0])>0):
        print(2)
        if(z-(mo_a[-1][0])<0):
            dv_a = -180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
        else:
            dv_a = -180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)

    if((y-mo_a[-1][1])>0 and (x-mo_a[-1][0])>0):
        print(3)
        if(z-(mo_a[-1][0])<0):
            dv_a = 180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
        else:
            dv_a = -180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)

    if((y-mo_a[-1][1])>0 and (x-mo_a[-1][0])<0):
        print(4)
        if(z-(mo_a[-1][0])<0):
            dv_a = -180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
        else:
            dv_a = 180*((math.atan(z-(mo_a[-1][2])/(math.sqrt((x-mo_a[-1][0])**2+(y-mo_a[-1][1])**2))))/math.pi)
    return dv_a
for i in range(10):
    #print(dh_a(0,0,0),dv_a(0,0,0))
    mov_a(-100,dh_a(0,0,0),dv_a(0,0,0))
    mov_a(100,dh_a(0,0,0),dv_a(0,0,0))
    mov_a(100,random.random()*360,random.random()*360)
mov_a(-100,dh_a(0,0,0),dv_a(0,0,0))
mov_a(100,dh_a(0,0,0),dv_a(0,0,0))
for i in range(len(mo_a)-1):
    ax.plot3D(((mo_a[i][0]),(mo_a[i+1][0])),((mo_a[i][1]),(mo_a[i+1][1])),((mo_a[i][2]),(mo_a[i+1][2])),c='r')
    print(mo_a[i+1][0],mo_a[i+1][1],mo_a[i+1][2])

plt.show()
