def soma_todos_numeros_anteriores(n):
    if n == 1:
        return 1
    else:
        return n + soma_todos_numeros_anteriores(n - 1)


if __name__ == "__main__":
    print(soma_todos_numeros_anteriores(4))