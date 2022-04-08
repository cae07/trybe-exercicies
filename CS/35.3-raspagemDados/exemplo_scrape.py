from parsel import Selector
import requests



# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    # primeiro buscamos o conteudo da proxima pagina
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    # Imprimimos todos os produtos desta pagina
    for book in selector.css(".product_pod"):
        title = book.css("h3 a::attr(title)").get()
        price = book.css(".price_color::text").re(r"£\d+\.\d{2}")

        print(title, price)
    
    # buscamos o detalhe de um livro
    detail_href = book.css("h3 a::attr(href)").get()
    detail_page_url = URL_BASE + detail_href

    # Extrai o conteúdo desejado na página detalhes
    detail_response = requests.get(detail_page_url)
    detail_selector = Selector(text=detail_response.text)

    # Extrai a informação 
    description = detail_selector.css("#product_description ~ p::text").get()
    suffix = "...more"
    if description.endswith(suffix):
        description = description[:-len(suffix)]

    print(description)
    
    # descobre qual é a próxima página e altera a variavel
    # next_page_url = selector.css(".next a::attr(href)").get()
    next_page_url = False


