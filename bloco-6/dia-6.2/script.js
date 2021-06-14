const botao = document.querySelector('#botao-submit');
let container = document.querySelector('.conteiner-1');
const inputEstados = document.getElementById('input-estados');


botao.addEventListener('click', function (event) {
  event.preventDefault();
});

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 
'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let contagem = 0; contagem < estados.length; contagem += 1) {
  let listaEstados = estados[contagem];
  let listaSiglas = siglas[contagem];  
  let opcaoSelected = document.createElement('option');

  opcaoSelected.innerText = listaEstados;
  opcaoSelected.value = listaSiglas;
  inputEstados.appendChild(opcaoSelected);
}
