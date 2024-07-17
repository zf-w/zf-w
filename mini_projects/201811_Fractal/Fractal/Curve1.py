import turtle
import math
wn = turtle.Screen()
a = turtle.Turtle()
a.speed(0)
a.penup()
a.goto(-150,0)
def plt(n,l,d):
    if n <=1:
        a.setheading(d)
        a.pendown()
        a.forward(l)
        a.penup()
        return 0
    else:
        plt(n-1,l/6,d)
        plt(n-1,l/3,d+60)
        plt(n-1,l/3,d-60)
        plt(n-1,l/3,d-60)
        plt(n-1,l/3,d+60)
        plt(n-1,l/6,d+0)
        return 0
for i in range(1,6):
    a.goto(-150,i*120-400)
    plt(i,300,0)
