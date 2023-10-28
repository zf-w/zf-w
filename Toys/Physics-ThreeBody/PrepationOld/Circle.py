import numpy as np
import matplotlib.pyplot as plt
theta = np.linspace(0,2*np.pi,10)
print(theta)
fig = plt.figure()
ax = plt.gca()
ln1, = ax.plot([],[],'-',lw=2)
x = [1*np.cos(theta[i]) for i in range(len(theta))]
y = [1*np.sin(theta[i]) for i in range(len(theta))]
ln1.set_data(x,y)
plt.show()
