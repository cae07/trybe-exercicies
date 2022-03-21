import sys



if __name__=="__main__":
    for argument in sys.argv:
        print("received -> ", argument)

# saida esperada quando roda no terminal
# python3 exemplo_sys.py 2 4 "teste"
# => received -> exemplo_sys.py
# => received -> 2
# => received -> 4
# => received -> "teste"