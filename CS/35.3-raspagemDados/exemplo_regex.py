from parsel import Selector
import requests


# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)

# Extrai todos os preços da primeira página depois vamos tirar o simbolo estranho que vem junto com o dado
# utilizamos o .re no lugar do .getall() para usar o regex e limpar os dados
# utilizamos o .re_first no lugar do .get() para usar o regex e limpar o dado
# queremos que começe com "£" seguido de numeros, depois um "." seguido de duas casas decimais
# prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
# print(prices)


# Vamos tirar o "...more" que vem junto com a descrição
# mas antes vamos verificar se existe mais desse sufixo no texto pra não perder info importante
response = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
selector = Selector(text=response.text)

# Extraimos a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
  
print(description)
