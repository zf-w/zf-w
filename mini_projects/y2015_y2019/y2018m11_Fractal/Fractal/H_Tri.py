import turtle
import math
wn = turtle.Screen()
a = turtle.Turtle()
a.speed(0)
a.penup()
def plt(n,x,y):
    global a
    if n == 1:
        print(a.position())
        a.goto(x,y)
        a.pendown()
        a.begin_fill()
        a.goto(x-10,y-20)
        a.goto(x+10,y-20)
        a.goto(x,y)
        a.end_fill()
        a.penup()
        return
    else:
        plt(n-1,x-pow(2,n-2)*10,y-pow(2,n-2)*20)
        plt(n-1,x+pow(2,n-2)*10,y-pow(2,n-2)*20)
        plt(n-1,x,y)
        return
plt(5,0,200)
