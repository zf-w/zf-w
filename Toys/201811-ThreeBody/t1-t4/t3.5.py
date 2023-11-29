import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax=plt.gca(projection='3d')
n = 3#几个质点
mo = []
def ran():
    r=random.randint(-100,100)
    a=[r,random.randint(r-1,r+1)]
    return a
mass = [81*81,81,1]
def start(a):
    if a==0:
        for i in range(n):
            mo.append([ran(),ran(),ran()])
    else:
        return
start(0)
lines = [ax.plot(m[0],m[1],m[2]) for m in mo]
def init():
    return lines
def update(la):
    print(distance(mo[0],mo[1],-1),distance(mo[0],mo[2],-1),distance(mo[1],mo[2],-1))
    for i in range(len(mo)):
        move(i)
    for i in range(len(mo)): 
        lines[i][0].set_data(mo[i][0],mo[i][1])
        lines[i][0].set_3d_properties(mo[i][2])
    return lines
def move(a):
    time = 0.001
    x = mo[a][0][-1]
    y = mo[a][1][-1]
    z = mo[a][2][-1]
    for i in range(len(mo)):
        b = len(mo[a][0])-1
        if i==a:
            x += mo[a][0][-1]-mo[a][0][-2]
            y += mo[a][1][-1]-mo[a][1][-2]
            z += mo[a][2][-1]-mo[a][2][-2]
        else:
            d = distance(mo[i],mo[a],b)
            x += (mo[i][0][b]-mo[a][0][b])*(1/pow(d,2)*time*mass[i])
            y += (mo[i][1][b]-mo[a][1][b])*(1/pow(d,2)*time*mass[i])
            z += (mo[i][2][b]-mo[a][2][b])*(1/pow(d,2)*time*mass[i])
    mo[a][0].append(x)
    mo[a][1].append(y)
    mo[a][2].append(z)
    
def distance(a,b,i):
    x = b[0][i]-a[0][i]
    y = b[1][i]-a[1][i]
    z = b[2][i]-a[2][i]
    return np.sqrt(pow(x,2)+pow(y,2)+pow(z,2))
print(mo)
ani = animation.FuncAnimation(fig,update,init_func=init,interval=20) 
plt.show()
