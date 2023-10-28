import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
import sympy as sy
from sympy import *
fig = plt.figure()
ax = fig.add_subplot(111)
ax.set_xlim(-10,10)
ax.set_ylim(-10,10)
l, = ax.plot([],[])
x = Symbol('x')
y = Symbol('y')
t = Symbol('t')
xe = t
ye = 0*t+10
td = [i for i in range(-100,100)]
def init():
    l.set_data([[xe.subs(t,i) for i in td],[ye.subs(t,i) for i in td]])
    return l,
def update(a):
    global de,xe,ye
    de = xe**2+ye**2
    xe = xe-xe/(de)
    ye = ye-ye/(de)
    l.set_data([[xe.subs(t,i) for i in td],[ye.subs(t,i) for i in td]])
    return l,
ani = animation.FuncAnimation(fig,update,init_func=init,interval=200)
plt.show()

