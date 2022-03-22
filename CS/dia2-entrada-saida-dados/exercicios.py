#Exercício 1: Faça um programa que solicite o nome de uma
# pessoa usuária e imprima-o na vertical.

# nome = input("Qual o seu nome? ")

# for letra in nome:
#     print(letra)

# Exercício 2: Escreva um programa que receba vários números
# naturais e calcule a soma desses valores. Caso algum valor
# da entrada seja inválido, por exemplo uma letra, uma mensagem
# deve ser exibida, na saída de erros, no seguinte formato:
# "Erro ao somar valores, {valor} é um valor inválido".
# Ao final, você deve imprimir a soma dos valores válidos.
# 🦜 Receba os valores em um mesmo input , solicitando à pessoa
# usuária que separe-os com um espaço. Receba os valores no
# formato str e utilize o método split para pegar cada valor separado.
# O método isdigit , embutido no tipo str , pode ser utilizado 
# para verificar se a string corresponde a um número natural.

from curses.ascii import isdigit



def verifica_e_soma(lista):
    numeros = [];
    for digito in lista:
        if digito.isdigit() == False:
            return print(f"o dígito {digito} não é válido")
        else:
            numeros.append(int (digito))
    soma = 0
    for numero in numeros:
        soma += numero
    
    return soma

# lista = (input("digite alguns numeros separados por espaços que vou somar tudo: ")).split()
# print(verifica_e_soma(lista))

# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente as pessoas
# que estão reprovadas, e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.
# Arquivo:
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

### escrever arquivo
with open("estudantes.txt", mode="w") as file:
    LIST = ["Marcos 10\n", "Felipe 4\n", "José 6\n", "Ana 10\n", "Maria 9\n", "Miguel 5\n"]
    file.writelines(LIST)
    


### ler arquivo e filtrar
recuperacao = []
with open("estudantes.txt") as file:
    for line in file:
        student = line.split(" ")
        if int (student[1]) < 6:
            recuperacao.append(student[0])

with open("recuperacao.txt", mode="w") as file:
    for student in recuperacao:
        file.writelines(f"{student}\n")

with open("recuperacao.txt", mode="r") as file:
    for student in file:
        print(student, end="")


# print(all_students)