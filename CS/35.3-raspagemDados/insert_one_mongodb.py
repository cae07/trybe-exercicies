from pymongo import MongoClient

client = MongoClient()
db = client.catalogue

# book representa um dado obtido na raspagem
book = {
  "title": "A light in the Attic",
}

# insere um dado e já resgata o inserted_id
document_id = db.books.insert_one(book).inserted_id
print(document_id)

client.close() # fecha a conexão
