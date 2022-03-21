#Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .

from tkinter import N


def menor_elemento(lista):
    menor = 100
    for numero in lista:
        if numero < menor:
            menor = numero
    return menor


lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(menor_elemento(lista))

# Exercício 2: Faça um programa que, dado um valor n qualquer,
# tal que n > 1 , imprima na tela um triângulo retângulo com n
# asteriscos de base. Por exemplo, para n = 5 o triângulo
# terá 5 asteriscos na base:

def piramide_asteriscos(n):
    for numero in range(1, n + 1):
        print(numero * "*")

piramide_asteriscos(5)

# Exercício 3: Crie uma função que receba um número inteiro N
# e retorne o somatório de todos os números de 1 até N . 
# Por exemplo, para N = 5 , o valor esperado será 15 .

def soma_tudo(N):
    result = 0
    for contador in range(N + 1):
        result += contador
    return result

print(soma_tudo(5))

# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
# Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível
# (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor
# a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50,
# e o preço do litro do álcool é R$ 1,90.
def calcula_preco_combustivel(litros, tipo):
    min_desc_alc = 97 / 100 # 3% desconto
    max_desc_alc = 95 / 100 # 5% desconto
    min_desc_gas = 96 / 100 # 4% desconto
    max_desc_gas = 94 / 100 # 6% desconto
    preco_alc = 1.9
    preco_gas = 2.5

    if tipo == "A":
        if litros <= 20:
            return litros * preco_alc * min_desc_alc
        else:
            return litros * preco_alc * max_desc_alc
    else:
        if litros <= 20:
            return litros * preco_gas * min_desc_gas
        else:
            return litros * preco_gas * max_desc_gas

print(calcula_preco_combustivel(20, "A"))