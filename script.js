const contrasteBtn = document.getElementById('contraste');
const vozBtn = document.getElementById('voz');
const aumentarBtn = document.getElementById('aumentar');
const diminuirBtn = document.getElementById('diminuir');

let tamanhoFonte = 16;

// Modo alto contraste
contrasteBtn.addEventListener('click', () => {
  document.body.classList.toggle('contraste');
});

// Aumentar e diminuir fonte
aumentarBtn.addEventListener('click', () => {
  tamanhoFonte += 2;
  document.body.style.fontSize = `${tamanhoFonte}px`;
});

diminuirBtn.addEventListener('click', () => {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = `${tamanhoFonte}px`;
  }
});

// Leitor de voz
vozBtn.addEventListener('click', () => {
  const texto = document.body.innerText;
  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = 'pt-BR';
  window.speechSynthesis.speak(msg);
});

