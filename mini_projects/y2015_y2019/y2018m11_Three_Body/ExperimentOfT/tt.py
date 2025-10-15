import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax = fig.add_subplot(221)
axa = fig.add_subplot(222)
ax.set_xlim(-10,10)
ax.set_ylim(-10,10)
r = 5
l = 0.02
ln, = ax.plot([],[])
lnarea, = axa.plot([],[])
mo = [[0],[r]]
v = [[0.10],[0]]
area = []
def init():
    ln.set_data(mo)
    return ln,
def update(a):
    xtemp = [i for i in range(-a,1)]
    area.append(0)
    for i in range(100):
        d = pow(mo[0][-1],2)+pow(mo[1][-1],2)
        x = v[0][-1]
        y = v[1][-1]
        x += ((-1*mo[0][-1])/(d))*pow(l,2)/2
        y += ((-1*mo[1][-1])/(d))*pow(l,2)/2
        v[0].append(x)
        v[1].append(y)
        mo[0].append(mo[0][-1]+x*l)
        mo[1].append(mo[1][-1]+y*l)
        d1 = (d)
        d2 = (pow(mo[0][-1],2)+pow(mo[1][-1],2))
        d3 = (pow(x,2)+pow(y,2))
        area[-1]+= np.sqrt(2*((d1*d2)+(d1*d3)+(d2*d3))-pow(d1,2)-pow(d2,2)-pow(d3,2))/4
    lnarea.set_data([xtemp,area])
    ln.set_data(mo)
    return ln,lnarea,
ani = animation.FuncAnimation(fig,update,init_func=init,interval=1)
plt.show()
