import matplotlib as mpl
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt

mpl.rcParams['legend.fontsize'] = 10

fig = plt.figure()
ax = fig.gca(projection='3d')
theta = np.linspace(-4 * np.pi, 4 * np.pi, 100)
z = [1,2,3]#np.linspace(-2, 2, 100)
#r = z**2 
x = [0,1,3]#r * np.sin(theta)
y = [0,0,3]#r * np.cos(theta)
ax.plot(x, y, label='parametric curve')
ax.legend()
print(theta)
plt.show()
