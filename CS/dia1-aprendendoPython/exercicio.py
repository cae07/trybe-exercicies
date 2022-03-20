# EXERCICIOS DE FIXAÇÃO
from cmath import log
from unittest import result


trybe_course = ["Introdução", "Front-end", "Back-end"]

# Exercício 5: Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append("Ciência da Computação")
# Exercício 6: Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0].replace("Introdução", "Fundamentos")

print(trybe_course)

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se
# também o método set() . Inicialize uma variável com essa função
# var = set() e adicione seu nome ao conjunto utilizando um dos métodos
# vistos acima. Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

var = set()

var.add("Caê")
print(var)

#### exercicio 8 Dict #####
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

# Exercício 8: O que acontecerá se você tentar acessar o valor da chave "personagem" como fazíamos em JavaScript, utilizando object.key ?
#print(object.keys(info)) # AttributeError: type object 'object' has no attribute 'key'

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info.update({"recorrente": "sim"})
print(info)

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
del info["origem"]
print(info)

# Exercício 11: Após uma consulta do banco de dados, temos linhas que contém nome,
# sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente
# seria recomendada dado que após esta consulta somente exibimos estes valores.

# estrutura seria tuplas ("Thiago", "Nobre", 29)


#Exercício 12: Realizar a contagem de quantas vezes cada elemento aparece
# em uma sequência é uma técnica muito útil na solução de alguns problemas.
# Qual é a estrutura mais recomendada para o armazenamento desta contagem?

# for in

#Exercício 13: O Fatorial de um número inteiro é representado pela
# multiplicação de todos os números predecessores maiores que 0.
# Por exemplo o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5 .
# Escreva um código que calcule o fatorial de um número inteiro.

n = 6
result = 1

for index in range(2, n):
    result *= index

print(result)


#Exercício 14: Um sistema de avaliações registra valores de 0 a 10
# para cada avaliação. Após algumas mudanças estes valores precisam
# ser ajustados para avaliações de 0 a 100. Dado uma sequência de
# avaliações ratings = [6, 8, 5, 9, 10] . Escreva um código capaz
# de gerar as avaliações após a mudança. Neste caso o resultado deveria
# ser [60, 80, 50, 90, 100] .

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)


print(new_ratings)

# solução utilizando compreensão de listas
ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating
                for rating in ratings]

# print(new_ratings)

# Exercício 15: Percorra a lista do exercício 14 e imprima "Múltiplo de 3" se o elemento for divisível por 3.

for rating in new_ratings:
    if rating % 3 == 0:
        print(rating)