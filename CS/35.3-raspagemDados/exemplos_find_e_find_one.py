from pymongo import MongoClient

client = MongoClient()
db = client.catalogue

# busca documento na coleção, sem filtros
primeiro_livro = db.books.find_one()
print(primeiro_livro)

# busca utilizando filtros
for book in db.books.find({ "title": { "$regex": "t" } }):
    print(book["tittle"])
  
client.close() # fecha a conexão
