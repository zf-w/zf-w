import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax=plt.gca(projection='3d')
ln1,=ax.plot([],[],[],'-',color='r',lw=2)
ln2,=ax.plot([],[],[],'-',color='g',lw=2)
ln3,=ax.plot([],[],[],'-',color='b',lw=2)
def ran():
    r=random.randint(-10,10)
    a=[r,random.randint(r-1,r+1)]
    return a
mo = [[ran(),ran(),ran()],[ran(),ran(),ran()],[ran(),ran(),ran()]]
def init():
    ln1.set_data(mo[0][0],mo[0][1])
    ln1.set_3d_properties(mo[0][2])
    ln2.set_data(mo[1][0],mo[1][1])
    ln2.set_3d_properties(mo[0][2])
    ln3.set_data(mo[2][0],mo[2][1])
    ln3.set_3d_properties(mo[0][2])
    return ln1,ln2,ln3,
def update(la):
    move(0)
    move(1)
    move(2)
    ln1.set_data(mo[0][0],mo[0][1])
    ln1.set_3d_properties(mo[0][2])
    ln2.set_data(mo[1][0],mo[1][1])
    ln2.set_3d_properties(mo[0][2])
    ln3.set_data(mo[2][0],mo[2][1])
    ln3.set_3d_properties(mo[0][2])
    return ln1,ln2,ln3,
def move(a):
    motion = [[],[],[]]
    time = 10
    x = mo[a][0][-1]
    y = mo[a][1][-1]
    z = mo[a][2][-1]
    for i in range(len(mo)):
        b = len(mo[a][0])-1
        if i==a:
            x += mo[a][0][-1]-mo[a][0][-2]
            y += mo[a][1][-1]-mo[a][1][-2]
            z += mo[a][2][-1]-mo[a][2][-2]
            motion[0].append(mo[a][0][-1]-mo[a][0][-2])
            motion[1].append(mo[a][1][-1]-mo[a][1][-2])
            motion[2].append(mo[a][2][-1]-mo[a][2][-2])
        else:
            d = distance(mo[i],mo[a],b)
            x += (mo[i][0][b]-mo[a][0][b])*(1/pow(d,2)*time)
            y += (mo[i][1][b]-mo[a][1][b])*(1/pow(d,2)*time)
            z += (mo[i][2][b]-mo[a][2][b])*(1/pow(d,2)*time)
            motion[0].append((mo[i][0][b]-mo[a][0][b])*(1/pow(d,2))*time)
            motion[1].append((mo[i][1][b]-mo[a][1][b])*(1/pow(d,2))*time)
            motion[2].append((mo[i][2][b]-mo[a][2][b])*(1/pow(d,2))*time)
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
