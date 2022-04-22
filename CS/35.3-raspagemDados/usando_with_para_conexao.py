from pymongo import MongoClient




with MongoClient() as client:
    db = client.database
    for book in db.books.find({ "title": { "$regex": "t" } }):
        print(book["title"])

# assim como na leitura de arquivos
# conexão fecha automaticamente