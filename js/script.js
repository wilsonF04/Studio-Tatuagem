const menu = document.querySelector('#menu');
const lista = document.querySelector('#lista-menu');

function movimentoMenu() {
  lista.classList.toggle('ativo');
}

menu.addEventListener('click', movimentoMenu);
