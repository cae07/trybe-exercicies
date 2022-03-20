def soma(x, y):
    return x + y

print(soma(2, 3)) # => colocando os valores posicionais
print(soma(x=2, y=2)) # => declarando os valores

def concat(*strings):
    # equivalente a um join(strings)
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_strings += ', '
    return final_string

# pode ser chamado com 2 params
concat("Caê", "Calçolari") # saida => "Caê, Calçolari"

# ou n params
concat("Caê", "Calçolar", "Ama", "Carol") # saida => "Caê, Calçolar, Ama, Carol"


# dict é uma função que já vem embutida no python
print(dict(nome="Felipe", sobrenome="Silva", idade=25))  # cria um dicionário utilizando as chaves passadas

dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)  # o número de parâmetros passados para a função pode variar


########### continuando ###########3
len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Botaro", "Cássio", ", ")  # imprime Botaro Cássio ,

print("Botaro", "Cássio", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Botaro, Cássio

