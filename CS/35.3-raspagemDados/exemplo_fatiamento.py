# Estruturas de dados do tipo sequência como listas, tuplas e strings
# podem ter seus elementos acessados através de um índice.

# Recupera o primeiro elemento
[1, 2, 3][0] # => saida 1

# Podemos também definir dois índices que serão o valor inicial e final
# de uma subsequência da estrutura. Ou três valores, sendo o último
# o tamanho do passo que daremos ao percorrer a subsequência.

# Quando não incluso o valor inicial, iniciaremos do índice 0
# e do índice 2 em diante, os elementos não são incluídos
(1, 2, 3, 4)[:2]  # Saída: (1, 2)

# Quando omitimos o valor final
# o fatiamento ocorre até o fim da sequência
(1, 2, 3, 4)[1:]  # Saída: (2, 3, 4)

# Vá do índice 3 até o 7.
# O item no índice 7 não é incluído
"palavra"[3:7]  # Saída: "avra"

# Começando do elemento de índice 1, vá até o último,
# saltando de 2 em 2
[1, 2, 3, 4][1::2]  # Saída: [2, 4]
