import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax = fig.add_subplot(111)
ax.set_xlim(-10,10)
ax.set_ylim(-10,10)
r = 1
ln, = ax.plot([],[])
ln0, = ax.plot([0,0],[0,0])
mo = [[0],[r]]
v = [[0.8],[0]]
def init():
    ln.set_data(mo)
    return ln,ln0,
def dis(a,b):
    dx = a[-1]-a[-2]
    dy = b[-1]-b[-2]
    dd = pow(dx,2)+pow(dy,2)
    dd = np.sqrt(dd)
    return(dd)
def update(a):
    d = pow(mo[0][-1],2)+pow(mo[1][-1],2)
    x = v[0][-1]
    y = v[1][-1]
    v0 = np.sqrt(pow(v[0][-1],2)+pow(v[1][-1],2))
    x += ((-1*mo[0][-1])/(d))*(0.001/v0)
    y += ((-1*mo[1][-1])/(d))*(0.001/v0)
    d0 = dis([mo[0][-1]+x,mo[0][-1]],[mo[1][-1]+y,mo[1][-1]])
    v[0].append(x)
    v[1].append(y)
    x *= 0.001/d0
    y *= 0.001/d0
    print(d0,np.sqrt(d))
    mo[0].append(mo[0][-1]+x)
    mo[1].append(mo[1][-1]+y)
    ln.set_data(mo)
    return ln,ln0,
ani = animation.FuncAnimation(fig,update,init_func=init,interval=1)
plt.show()
