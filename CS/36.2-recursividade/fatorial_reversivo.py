def fatorial_recursivo(n):
    if n == 1:
        return 1
    else:
        return n * fatorial_recursivo(n - 1)

if __name__ == "__main__":
    print(fatorial_recursivo(5))
