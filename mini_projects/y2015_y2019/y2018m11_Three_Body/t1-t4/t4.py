import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax=fig.add_subplot(224,projection='3d')
ax1=fig.add_subplot(211)
n = 2#几个质点
mo = []
dis = []
def ran():
    r=random.randint(-10,10)
    a=[r,random.randint(r-1,r+1)]
    return a
mass = [8100,1,8100,8100]
def start(a):
    if a==0:
        for i in range(n):
            mo.append([ran(),ran(),ran()])
    else:
        return
start(0)
lines = [ax.plot(mo[i][0],mo[i][1],mo[i][2],label = str(mass[i])) for i in range(len(mo))]
lines1 = []
for i in range(len(mo)-1):
        for j in range(i+1,len(mo)):
            lines1.append(ax1.plot([],[],label=(str(mass[i])+" to "+str(mass[j]))))
            dis.append([])
def init():
    return lines
def update(la):
    a = move()
    for i in range(len(a)):
        dis[i].append(a[i])
        lines1[i][0].set_data([j for j in range(-len(dis[i]),0)],dis[i])
    for i in range(len(mo)): 
        lines[i][0].set_data(mo[i][0],mo[i][1])
        lines[i][0].set_3d_properties(mo[i][2])
    return lines,lines1,
def move():
    time = 0.001
    dd = []
    for i in range(len(mo)):
        for j in range(3):
            mo[i][j].append(2*mo[i][j][-1]-mo[i][j][-2])
    for i in range(len(mo)-1):
        for j in range(i+1,len(mo)):
            d = distance(i,j)
            dd.append(d)
            for k in range(3):
                mo[i][k][-1] += (mo[j][k][-2]-mo[i][k][-2])*((1/pow(d,2))*time*mass[j])
                mo[j][k][-1] += (mo[i][k][-2]-mo[j][k][-2])*((1/pow(d,2))*time*mass[i])
    return dd
            
            
            
def distance(i,j):
    x = mo[i][0][-2]-mo[j][0][-2]
    y = mo[i][1][-2]-mo[j][1][-2]
    z = mo[i][2][-2]-mo[j][2][-2]
    return np.sqrt(pow(x,2)+pow(y,2)+pow(z,2))
ani = animation.FuncAnimation(fig,update,init_func=init,interval=1)
ax1.legend()
ax.legend()
plt.show()
