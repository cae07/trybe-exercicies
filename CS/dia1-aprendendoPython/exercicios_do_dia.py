# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def return_the_bigger(x, y):
    if x > y:
        return x
    else:
        return y

print(return_the_bigger(15, 8)) # saida 15
print(return_the_bigger(5, 8)) # saida 8


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def calcula_media(lista):
    result = 0
    for item in lista:
        result += item
    
    return result / len(lista) # o método len retorna o tamanho da lista

lista = [3, 5, 6, 15, 9, 2, 51, 16]
print(calcula_media(lista))

#Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

def quadrado_asteriscos(n):
    for index in range(n):
        print(n * "*") 

quadrado_asteriscos(5)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

def maior_nome(lista):
    result = ""
    for nome in lista:
        if len(nome) > len(result):
            result = nome
    return result

lista = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print(maior_nome(lista)) # => saida Fernanda

# Exercício 5: Considere que a cobertura da tinta é de 1 litro
# para cada 3 metros quadrados e que a tinta é vendida em latas
# de 18 litros, que custam R$ 80,00. Crie uma função que retorne
# dois valores em uma tupla contendo a quantidade de latas de tinta
# a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def comprar_tintas(metros_quadrados):
    quantidade = metros_quadrados // 3
    tintas = quantidade // 18
    valor = tintas * 80

    return (tintas, valor)

print(comprar_tintas(54))

# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo" ,
# caso não seja possível formar um triângulo.
# 🦜 Dica:
# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.

def is_triangle_and_type(a, b, c):
    condition_a = (b - c) < a < (b + c)
    condition_b = (a - c) < b < (a + c)
    condition_c = (a - b) < c < (a + b)

    if condition_a and condition_b and condition_c:
        if a == b and a == c:
            return "Triângulo Equilátero"
        elif a == b or b == c:
            return "Triângulo Isósceles"
        else:
            return "Triângulo Escaleno"
    else:
        return "não é triangulo"

print(is_triangle_and_type(5, 5, 5)) # saida => Triângulo Equilátero
print(is_triangle_and_type(5, 5, 8)) # saida => Triângulo Isósceles
print(is_triangle_and_type(5, 4, 6)) # saida => Triângulo Escaleno
print(is_triangle_and_type(1, 2, 50)) # saida => não é triangulo
