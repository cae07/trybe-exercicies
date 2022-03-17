# EXERCICIOS DE FIXAÇÃO
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
