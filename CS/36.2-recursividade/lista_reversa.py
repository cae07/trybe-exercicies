# "Faça uma função que recebe uma lista, e retorna-a na ordem reversa."

def reverta_a_lista(lista):
    lista_invertida = []
    for n in lista:
        print(n)
        lista_invertida.insert(0, n)
    
    return lista_invertida


# solução com recursividade
def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


if __name__ == "__main__":
    lista = [1, 2, 3, 4, 5]
    # print(reverta_a_lista(lista))
    print(reverse(lista))
