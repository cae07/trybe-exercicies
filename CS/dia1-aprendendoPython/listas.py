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

#print(
#    permissions.intersection({"user", "member"})
#)  # retorna um conjunto resultante da intersecção dos conjuntos


#print(permissions.difference({"user"}))  # retorna a diferença entre os dois conjuntos

##### FROZENSET => IMUTÁVEIS #####
imutaveis = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset
print(imutaveis)

print(imutaveis.union({"user"}))  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

print(imutaveis.intersection({"user", "member"}))  # retorna um conjunto resultante da intersecção dos conjuntos

print(imutaveis.difference({"user"}))  # retorna a diferença entre os dois conjuntos


##### DICT / REPRESENTAÇÃO CHAVE => VALOR #####

people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves (ao contrário de JS, as aspas duplas são obrigatórias)

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]

print(people_by_id.items())  # dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

people_by_id.update({"chave": "valor"}) # atualizar a lista
