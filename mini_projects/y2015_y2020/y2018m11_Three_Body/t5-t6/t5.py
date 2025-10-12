import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax=fig.add_subplot(111,projection='3d')
ax1=fig.add_subplot(333)
n = 3#几个质点
t = 1
mo = []
v = []
dis = []
def ran(i):
    r=random.randint(-i,i)
    return r
mass = [1,1,1,8100]
def start(a):
    if a==0:
        for i in range(n):
            mo.append([[ran(100)],[ran(100)],[ran(100)]])
            v.append([[ran(1)],[ran(1)],[ran(1)]])
    else:
        return
start(0)
#mo = [[[0],[0],[0]],[[0],[100],[0]]]
#v = [[[0],[0],[1]],[[10],[10],[0]]]
lines = [ax.plot(mo[i][0],mo[i][1],mo[i][2],label = str(mass[i])) for i in range(len(mo))]
points = [ax.scatter([mo[i][0][-1]],[mo[i][1][-1]],[mo[i][2][-1]]) for i in range(len(mo))]
lines1 = []
for i in range(len(mo)-1):
        for j in range(i+1,len(mo)):
            lines1.append(ax1.plot([],[],label=(str(mass[i])+" to "+str(mass[j]))))
            dis.append([])
def init():
    return lines
def update(la):
    a = move()
    if la>500:
        for i in range(len(mo)):
            for j in range(3):
                del mo[i][j][0]
                del v[i][j][0]
    for i in range(len(a)):
        dis[i].append(a[i])
        lines1[i][0].set_data([j for j in range(-len(dis[i]),0)],dis[i])
    for i in range(len(mo)): 
        lines[i][0].set_data(mo[i][0],mo[i][1])
        lines[i][0].set_3d_properties(mo[i][2])
        points[i].set_offsets([(mo[i][0][-1]),(mo[i][1][-1])])
        points[i].set_3d_properties([(mo[i][2][-1])],'z')
    return lines,lines1,
def move():
    dd = []
    for i in range(len(mo)):
        for j in range(3):
            v[i][j].append(v[i][j][-1])
    for i in range(len(mo)-1):
        for j in range(i+1,len(mo)):
            d = distance(i,j)
            #print(np.sqrt(d))
            dd.append(np.sqrt(d))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            for k in range(3):
                v[i][k][-1] += (mo[j][k][-1]-mo[i][k][-1])*(1/d)*mass[j]
                v[j][k][-1] += (mo[i][k][-1]-mo[j][k][-1])*(1/d)*mass[i]
    for i in range(n):
        vdistance(i)
    print(dd)
    return dd      
def distance(i,j):
    x = mo[i][0][-1]-mo[j][0][-1]
    y = mo[i][1][-1]-mo[j][1][-1]
    z = mo[i][2][-1]-mo[j][2][-1]
    return pow(x,2)+pow(y,2)+pow(z,2)
def vdistance(i):
    dv = np.sqrt(pow(v[i][0][-1],2)+pow(v[i][1][-1],2)+pow(v[i][2][-1],2))
    #print(dv)
    if dv>=t:
        for j in range(3):
            mo[i][j].append(mo[i][j][-1]+v[i][j][-1]*(t/dv))
    else:
        for j in range(3):
            mo[i][j].append(mo[i][j][-1]+v[i][j][-1])
print(mo)
ani = animation.FuncAnimation(fig,update,init_func=init,interval=1)
ax1.legend()
ax.legend()
plt.show()
