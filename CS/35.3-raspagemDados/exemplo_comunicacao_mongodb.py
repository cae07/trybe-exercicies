from pymongo import MongoClient

# por padrão o host é localhost e porta 27017
# esses valores podem ser modificados passando uma URI

client = MongoClient()
# client = MongoClient("mongodb://localhost:27017/")

# o banco de dados catalogue será criado se não existir
db = client.catalogue

# a coleção books será criada se não existir
students = db.books
client.close() # fecha a conexão com o DB