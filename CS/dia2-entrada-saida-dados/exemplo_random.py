import random

random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int (input ("Qual o seu palpite? => "))
    print("você chutou", guess, "e é =>", random_number)
    

print("congratulations, you are an idiot!")