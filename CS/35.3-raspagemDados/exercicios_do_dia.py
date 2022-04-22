import requests
from parsel import Selector

# Exercício 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8
# e exiba seu conteúdo de forma legível.
# response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.status_code)
# print(response.text)

# Exercício 2 Faça uma requisição ao recurso usuários da API do Github
# ( https://api.github.com/users ), exibindo o username e url
# de todos os usuários retornados.

# response = requests.get("https://api.github.com/users")
# users = response.json()
# for user in users:
#     print(user["login"], user["url"])


#  Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers
# e verifique se foi bem sucedido.

# response = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers")
# print(response.status_code)
# assert "bot detected" not in response.text

# Baseados em uma página contendo detalhes sobre um livro
# http://books.toscrape.com/catalogue/the-grand-design_405/index.html ,
# faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
# O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76 .
# A descrição de ter o sufixo "more..." removido quando existir.
# Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço,descrição,capa.

response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()

preco = selector.css(".price_color::text").re_first(r"\£\d+\.\d{2}")

descricao = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if descricao.endswith(suffix):
    descricao = descricao[:-len(suffix)]

url_imagem = selector.css(".carousel-inner .item img::attr(src)")



# print(title)
# print(preco)
# print(descricao)
print(url_imagem)
