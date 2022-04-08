from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recuperar o attr href do primeiro elemento que combine com o seletor
href1 = selector.css(".image_container a::attr(href)").get()
href2 = selector.css(".product_pod h3 a::attr(href)").get()
print("1 => " + href1)
print("2 => " + href2)

book_detail_page_url = URL_BASE + href1

#baixa o conteúdo da página de detalhes
detail_response = requests.get(book_detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do livro
# ~ significa a tag irmã
# classe usamos "." 
# id usamos "#"
description = detail_selector.css("#product_description ~ p::text").get()
print(description)

