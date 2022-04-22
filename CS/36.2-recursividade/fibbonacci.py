# Faça uma função que retorne o enésimo número da sequência de Fibonacci.

# def fibonacci(n):
#     fibo = [0, 1, 1]

#     while len(fibo) < n:
#         next = fibo[-1] + fibo[-2]
#         fibo.append(next)
    
#     print(fibo)


# solução com recursividade
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


if __name__ == "__main__":
    # print(fibonacci(5))
    print(fibonacci(15))
