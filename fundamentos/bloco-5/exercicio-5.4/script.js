const button = document.getElementById('add-button');  //  pegou o botao
const input = document.getElementById('phrases-input');  //  pegou o imput
const list = document.getElementById('phrases-list');  // pegou o ul

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases')); // pega o objeto com valor 'phrases'
  const phraseText = input.value;  //  pega o texto do imput
  oldList.push(phraseText);  //  push pro array criado no inicialRenderization
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
};

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
};

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    for (let index = 0; index < phrasesList.length; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    };
  };
};

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};