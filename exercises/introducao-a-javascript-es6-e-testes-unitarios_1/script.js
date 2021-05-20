

const botaoClick = document.getElementById('counter');
let clicks = 0;

botaoClick.addEventListener('click', () => {
  const texto = document.getElementById('numeroClicks');
  clicks += 1;
  texto.innerText = `O botão foi clicado ${clicks} vezes.`;
})