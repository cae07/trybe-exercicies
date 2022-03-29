import json



class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file + '.json'

    def build(self):
        ''' Aqui colocamos a lógica para a entidade 'se criar'
        ou seja, criar um relatório imprimivel. '''
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3',
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C',
                }]

    def serialize(self):
        '''vamos gerar aqui o nosso relatório JSON'''
        with open(self.export_file, mode='w') as file:
            json.dump(self.build(), file)


# Classe, crie (em outras palavras, instancie!) uma nova entidade 'Relatório de vendas' para eu usar!

meu_relatorio_de_vendas = SalesReport('meu_relatorio')

# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!

meu_relatorio_de_vendas.serialize()