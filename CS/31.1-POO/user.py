# exemplo de Programação Orientada a Objetos
# primeira entidade 
# User

class User:
    ''' __init__ é o método construtor do python.
    O primeiro parâmetro deve ser o `self` '''
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print("Envia email de reset e senha")

meu_user = User("Valentino Trocatapa", "valentino@tinytoons.com", "Grana")
print("antes de chamar o reset")
meu_user.reset_password();
print("depois de chamar o reset")

print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)
