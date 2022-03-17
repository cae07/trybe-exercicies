# EXERCICIOS DE FIXAÇÃO
from cmath import log


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
#print(object.key(info)) # AttributeError: type object 'object' has no attribute 'key'

# Exercício 9: Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim". Em seguida, imprima o objeto no console.
info.update({"recorrente": "sim"})
print(info)

# Exercício 10: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.
del info["origem"]
print(info)
