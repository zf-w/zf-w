from matplotlib.lines import Line2D
import matplotlib.pyplot as plt


figure, ax = plt.subplots()
# 设置x，y值域
ax.set_xlim(left=0, right=20)
ax.set_ylim(bottom=0, top=10)
# 两条line的数据
line1 = [(1, 1), (5, 10)]
line2 = [(11, 9), (8, 8)]
(line1_xs, line1_ys) = zip(*line1)
(line2_xs, line2_ys) = zip(*line2)
# 创建两条线，并添加
print(line1_xs)
ax.add_line(Line2D((1,2), (2,1), linewidth=1, color='blue'))
ax.add_line(Line2D(line2_xs, line2_ys, linewidth=1, color='red'))
# 展示
plt.plot()
plt.show()
