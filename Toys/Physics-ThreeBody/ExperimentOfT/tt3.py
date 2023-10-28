import numpy as np
import random
import cmath
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax = fig.add_subplot(221)
axd = fig.add_subplot(222)
axr = fig.add_subplot(223)
ax.set_xlim(-10,10)
ax.set_ylim(-10,10)
#axd.set_xlim(-2,0)
#axd.set_ylim(5,10)
r=10
n=2
ln = []
ln1 = []
lnr = []
mo = []
v = []
ra = []
distance = []
key = [0.02,0.01,0.01,0.001]
maxy = 0
miny = pow(2,64)
for i in range(n):
    ln.append(ax.plot([],[]))
    ln1.append(axd.plot([],[]))
    mo.append([[0],[r]])
    distance.append([])
    v.append([[1.1],[1]])
ntemp = 0
for i in range(n-1):
    for j in range(i+1,n):
        ra.append([])
        lnr.append(axr.plot([],[]))
        ntemp +=1
print(mo)
def init():
    for i in range(n):
        ln[i][0].set_data(mo[i])
    return ln,ln1,
def dis(a,b):
    dx = a[-1]-a[-2]
    dy = b[-1]-b[-2]
    dd = pow(dx,2)+pow(dy,2)
    dd = np.sqrt(dd)
    return(dd)
def update(a):
    tempa = [j for j in range(-a,1)]
    axd.set_xlim(-a,2)
    axr.set_xlim(-a,2)
    for i in range(n):
        dtemp = np.sqrt(pow(mo[i][0][-1],2)+pow(mo[i][1][-1],2))
        distance[i].append(dtemp)
        global maxy,miny
        miny = min(dtemp,miny)
        maxy = max(dtemp,maxy)
        axd.set_ylim(miny,maxy)
        for j in range(int(1/key[i])):
            d = pow(mo[i][0][-1],2)+pow(mo[i][1][-1],2)
            #distance[i].append(d)
            ln1[i][0].set_data ([tempa,distance[i]])
            x = v[i][0][-1]
            y = v[i][1][-1]
            v0 = np.sqrt(pow(v[i][0][-1],2)+pow(v[i][1][-1],2))
            x += ((-1*mo[i][0][-1])/(d))*(key[i]/v0)
            y += ((-1*mo[i][1][-1])/(d))*(key[i]/v0)
            d0 = dis([mo[i][0][-1]+x,mo[i][0][-1]],[mo[i][1][-1]+y,mo[i][1][-1]])
            v[i][0].append(x)
            v[i][1].append(y)
            x *= key[i]/d0
            y *= key[i]/d0
            #print(d0,np.sqrt(d))
            mo[i][0].append(mo[i][0][-1]+x)
            mo[i][1].append(mo[i][1][-1]+y)
        ln[i][0].set_data(mo[i])
    nte = 0
    for i in range(n-1):
        for j in range(i+1,n):
            ra[nte].append((distance[i][-1]/distance[j][-1])/a)
            nte+=1
    #print(ra,ntemp)
    for i in range(ntemp):
        lnr[i][0].set_data([tempa,ra[i]])
    return ln,ln1,lnr,
ani = animation.FuncAnimation(fig,update,init_func=init,interval=1)
plt.show()
