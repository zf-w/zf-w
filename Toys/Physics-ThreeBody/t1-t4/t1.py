import numpy as np
import random
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D #made by 王之枫_S1C1_RDFZ_ICC
fig = plt.figure()
ax=plt.gca(projection='3d')
ln1,=ax.plot([],[],[],'-',color='r',lw=2,label='A')
ln2,=ax.plot([],[],[],'-',color='g',lw=2)
ln3,=ax.plot([],[],[],'-',color='b',lw=2)
mo = [[[],[],[]],[[],[],[]],[[],[],[]]]
handles, labels = ax.get_legend_handles_labels()
ax.legend(handles[::-1], labels[::-1])
def init():
    return 0 
def update(la):
    mo[0][0] = [random.randint(-10,10) for i in range(10)]
    mo[0][1] = [random.randint(-10,10) for i in range(10)]
    mo[0][2] = [random.randint(-10,10) for i in range(10)]
    mo[1][0] = [random.randint(-10,10) for i in range(10)]
    mo[1][1] = [random.randint(-10,10) for i in range(10)]
    mo[1][2] = [random.randint(-10,10) for i in range(10)]
    mo[2][0] = [random.randint(-10,10) for i in range(10)]
    mo[2][1] = [random.randint(-10,10) for i in range(10)]
    mo[2][2] = [random.randint(-10,10) for i in range(10)]
    ln1.set_data(mo[0][0],mo[0][1])
    ln1.set_3d_properties(mo[0][2])
    ln2.set_data(mo[1][0],mo[1][1])
    ln2.set_3d_properties(mo[0][2])
    ln3.set_data(mo[2][0],mo[2][1])
    ln3.set_3d_properties(mo[0][2])
    return ln1,ln2,ln3,
ani = animation.FuncAnimation(fig,update,init_func=init,interval=20) 
plt.show()
