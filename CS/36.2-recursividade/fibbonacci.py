# Faça uma função que retorne o enésimo número da sequência de Fibonacci.

def fibbonacci(n):
    fibo = [0, 1, 1]

    while len(fibo) < n:
        next = fibo[-1] + fibo[-2]
        fibo.append(next)
    
    print(fibo)


if __name__ == "__main__":
    fibbonacci(5)
    fibbonacci(15)
