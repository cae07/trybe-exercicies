# O módulo csv , contêm duas principais funções:
# Um leitor ( reader ) que nos ajuda a ler o conteúdo, já fazendo as transformações dos valores para Python;
# E um escritor ( writer ) para facilitar a escrita nesse formato.

import csv



with open("balenabilidade.csv") as file:
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader

#  EXEMPLO
# agrupar campanhas e suas balneabilidades
bathing_by_campaign = {}
for row in data:
    campaign = row[6]
    bathing = row[2]
    if campaign not in bathing_by_campaign:
        bathing_by_campaign[campaign] = {
            "própria": 0,
            "imprópria": 0,
            "muito boa": 0,
            "indisponível": 0,
            "satisfatória": 0,
        }
    bathing_by_campaign[campaign][bathing] += 1

# escreve o relatório em csv
# abre um arquivo para escrita

with open("report_por_campanha.csv", mode="w") as file:
    writer = csv.writer(file)

    # escreve o cabeçalho
    headers = [
      "Campanha",
      "Prṕria",
      "imprópria",
      "Muito boa",
      "Indisponível",
      "Satisfatória",
    ]
    writer.writerow(headers)

    # finalmente escreve as linhas de dados
    for campaign, bathing, in bathing_by_campaign.items():
        # desempacota os valores de balneabilidade para formar uma linha
        # equivalente a
        # row = [campaign]
        # for value in bathing.values():
        #     row.append(value)
        row = [campaign, *bathing.values()]
        writer.writerow(row)


###### desempacotamento ############

a, b = "cd"
print(a) # saida: c
print(b) # saida: d

# pode ser qualquer nome
head, *tail = [1, 2, 3] # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]

