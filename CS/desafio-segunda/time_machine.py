A = int(input())
B = int(input())
C = int(input())

if (A > B and A > C ):
    b_floor = B * 2
    c_floor = C * 4
    print(b_floor + c_floor)
elif ((B > A and B > C) or A == B == C):
    a_floor = A * 2
    c_floor = C * 2
    print(a_floor + c_floor)
else:
    a_floor = A * 4
    b_floor = B * 2
    print(b_floor + a_floor)