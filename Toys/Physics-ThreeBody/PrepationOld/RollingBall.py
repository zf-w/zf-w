import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
fig = plt.figure()
ax = plt.gca()
ax.grid()
ln1, = ax.plot([],[],'-',lw=2)
ln2, = ax.plot([],[],'-',color='r',lw=2)
ln3, = ax.plot([],[],'-',color='r',lw=2)
theta = np.linspace(0,2*np.pi,100)
r_out = 1
r_in = 0.5
def init():
    ax.set_xlim(-1,1)
    ax.set_ylim(-1,1)
    x_out = [r_out*np.cos(theta[i]) for i in range(len(theta))]
    y_out = [r_out*np.sin(theta[i]) for i in range(len(theta))]
    ln1.set_data(x_out,y_out)
    return ln1,
def update(i):
    x_in = [(r_out-r_in)*np.cos(theta[i])+r_in*np.cos(theta[j]) for j in range(len(theta))]
    y_in = [(r_out-r_in)*np.sin(theta[i])+r_in*np.sin(theta[j]) for j in range(len(theta))]
    ln2.set_data(x_in,y_in)
    x_in = [-1*(r_out-r_in)*np.cos(theta[i])+r_in*np.cos(theta[j]) for j in range(len(theta)-1,-1,-1)]
    y_in = [-1*(r_out-r_in)*np.sin(theta[i])+r_in*np.sin(theta[j]) for j in range(len(theta)-1,-1,-1)]
    ln3.set_data(x_in,y_in)
    return (ln2,ln3,)
ani = animation.FuncAnimation(fig,update,range(len(theta)),init_func=init,interval=10)
plt.show()
