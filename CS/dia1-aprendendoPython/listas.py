fruits = ["orange", "apple", "grape", "pineapple"]

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("pineapple")  # removendo uma fruta

fruits.extend(
    ["pear", "melon", "kiwi"]
)  # acrescenta uma lista de frutas a lista original

fruits.index(
    "apple"
)  # retorna o índice onde a fruta está localizada, neste caso 1 em seu programa

fruits.sort()  # ordena a lista de frutas

##### TUPLAS #####
user = (
    "Cássio",
    "Botaro",
    42,
)  # elementos são definidos separados por vírgula, envolvidos por parenteses

user[0]  # acesso também por índices

##### conjuntos / SET #####
permissions = {
    "member",
    "group",
}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento

permissions.add("member")  # se o elemento já existir não faz nada

permissions.union({"user"})  # faz a união de outro set

print(
    permissions.intersection({"user", "member"})
)  # retorna um conjunto resultante da intersecção dos conjuntos


print(permissions.difference({"user"}))  # retorna a diferença entre os dois conjuntos
