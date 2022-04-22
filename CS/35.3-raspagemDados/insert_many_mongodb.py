from pymongo import MongoClient

client = MongoClient()
db = client.catalogue

documents = [
  {
    "title": "A light in the attic",
  },
  {
    "title": "Tipping the Velvet",
  },
  {
    "title": "Soumission",
  },
]

# insere vários documentos
db.books.insert_many(documents)

client.close() # fecha a conexão