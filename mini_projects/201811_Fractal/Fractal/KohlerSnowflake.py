import turtle
import math
wn = turtle.Screen()
a = turtle.Turtle()
a.speed(0)
a.penup()
a.goto(-150,0)
def plt(n,l,d):
    if n <=1:
        a.pendown()
        a.forward(l)
        a.penup()
    else:
        plt(n-1,l/3,d)
        a.left(60)
        plt(n-1,l/3,d+60)
        a.left(-120)
        plt(n-1,l/3,d-60)
        a.left(60)
        plt(n-1,l/3,d+0)
        return

for i in range(1,6):
    a.goto(-150,i*100-300)
    plt(i,300,0)

