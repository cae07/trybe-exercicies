PI = 3.14 # PI é uma "constante" em nosso módulo

def square(side):
    return side * side

def rectangle(length, width):
    return length * width

def circle(radius):
    return PI * radius * radius

# A variável __name__ é utilizada pelo interpretador Python
# para identificar o arquivo que esta sendo executado
# e seu valor será "__main__" quando invocamos um módulo como script .
if __name__ == "__main__":
    print("Área do quadrado de lado 10 => ", square(10))
    print("a área do retangulo de valores 15, 25 => ", rectangle(15, 25))
    print("a área do círculo de raio 25 => ", circle(25))
