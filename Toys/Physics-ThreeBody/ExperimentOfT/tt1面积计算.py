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
r = 3
l = 0.05
ln, = ax.plot([],[])
ln0, = ax.plot([0,0],[0,0])
mo = [[0],[r]]
v = [[0.23],[0]]
def init():
    ln.set_data(mo)
    return ln,ln0,
def update(a):
    for i in range(1):
        d = pow(mo[0][-1],2)+pow(mo[1][-1],2)
        x = v[0][-1]
        y = v[1][-1]
        v0 = (pow(x,2)+pow(y,2))
        x += ((-1*mo[0][-1])/(d))*pow(l,2)/2#pow((l/v0),1)
        y += ((-1*mo[1][-1])/(d))*pow(l,2)/2#pow((l/v0),1)
        d0 = np.sqrt(pow(x,2)+pow(y,2))
        v[0].append(x)
        v[1].append(y)
        #x *= l/d0
        #y *= l/d0
        #print(d0,np.sqrt(d))
        mo[0].append(mo[0][-1]+x*l)
        mo[1].append(mo[1][-1]+y*l)
    ln.set_data(mo)
    return ln,ln0,
ani = animation.FuncAnimation(fig,update,init_func=init,interval=1)
plt.show()
