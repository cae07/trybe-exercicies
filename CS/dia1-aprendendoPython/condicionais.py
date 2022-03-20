position = ''
salary = 5600;

if salary < 2000:
    position = 'Estagiário'
elif 2000 < salary < 5000:  # salary < 5000 => também funciona
    position = "junior"
elif 5000 < salary < 7500:  # salary < 7500 => também funciona
    position = "pleno"
elif 7500 < salary < 10000: # salary < 10000 => também funciona
    position = "Senior"
else:
    position = "lider"

print(position);