import json



with open("pokemons.json") as file:
    content = file.read() # leitura do arquivo
    pokemons = json.loads(content)["results"] # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons
    
all_names = [
    name["name"] for name in pokemons
]
for item in all_names:
    print(item)

with open("pokemons_names.json", mode="w") as file:
    names_to_json = json.dumps(all_names)
    file.write(names_to_json)

pokemons_type_grass = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("all_pokemons_type_grass.json", mode="w") as file:
    json_to_write = json.dumps(pokemons_type_grass) # converte Python para json
    file.write(json_to_write)


# A leitura pode ser feita diretamente do arquivo,
# utilizando o método load ao invés de loads .
# O loads carrega o JSON a partir de um texto
# e o load carrega o JSON a partir de um arquivo.

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

#print(pokemons[0])  # imprime o primeiro pokemon da lista


##########
# Assim como a desserialização, que faz a transformação de texto
# em formato JSON para Python , a serialização, que é o caminho
# inverso, também possui um método equivalente para escrever em
# arquivos de forma direta.
with open("exemplo_enxuto.json", mode="w") as file:
    json.dump(pokemons_type_grass, file)
    # # escreve no arquivo já transformando em formato json a estrutura
