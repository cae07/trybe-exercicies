restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = [] # array para popular
min_rating = 3.0 # condição min

for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)

for index in range(1, 6):
    print(index)


#Existe uma maneira mais "pythônica" de se fazer isto! 🐍
#Quando uma nova lista é criada como resultado de uma iteração,
# podemos simplificar utilizando compreensão de listas .
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

min_rating = 3.0 # condição min
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]

print(filtered_restaurants)

# Poderíamos listar também somente o nome dos restaurantes.
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

min_rating = 3.0 # condição min
filtered_restaurants = [restaurant["name"] # aqui selecionamos apenas o nome
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]

print(filtered_restaurants)
 
# Isto é equivalente às operações de map e filter em JavaScript.


#  A Sequência de Fibonacci,
# é uma sequência numérica começando por 0 e 1 e cada termo subsequente corresponde à soma dos dois anteriores.
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next