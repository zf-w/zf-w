import math
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
import numpy as np
import cmath
import matplotlib.animation as animation
fig = plt.figure()
window = fig.add_subplot(111)
line,=window.plot(0)
n = 0.1
def update(data):
    line.set_xdata(data[0])
    line.set_ydata(data[1])
    return line,
def a(x,y,z):#层数,方向,正负
    if x>0:
        a(x-1,y,z)#1
        dm(y,n)
        a(x-1,y,-z)#2
        dm(y,n)
        a(x-1,y,z)#3
        dm(y+(-90*z),n)##
        a(x-1,y-180,-z)#4
        dm(180+y,n)
        a(x-1,y-180*z,z)#5
        dm(180+y,n)
        a(x-1,y-180*z,-z)#6
        dm(y+(-90*z),n)##
        a(x-1,y,z)#7
        dm(y,n)
        a(x-1,y,-z)#8
        dm(y,n)
        a(x-1,y,z)#9
def dm(d,j):
    d = ((math.pi)/180)*d
    i = [math.cos(d)*j,math.sin(d)*j]
    mo[0].append((mo[0][-1]+i[0]))
    mo[1].append((mo[1][-1]+i[1]))
mo = [[0],[0]]
a(5,90,1)
def pri():
    for i in range(len(mo[0])+1):
        yield [mo[0][0:i],mo[1][0:i]]
ani = animation.FuncAnimation(fig,update,pri(),interval=10)
plt.show()
