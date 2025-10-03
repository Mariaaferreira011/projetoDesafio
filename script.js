const botao = document.getElementById("botao");
const descricao = document.getElementById("descricao");

botao.addEventListener("click", function() {
  descricao.textContent = "Marcou gols como o da vitória sobre o São Paulo em clássicos e gols decisivos em partidas do Campeonato Paulista e Brasileiro. Seus chutes precisos e velocidade fizeram a torcida vibrar em várias ocasiões..";
  botao.textContent = "Texto atualizado!";
});
