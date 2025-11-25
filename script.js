function mostrarMensagem() {
  alert("Bem-vinda à PinkStyle! Confira nossos lançamentos 💗");
}

/* ============================
      VARIÁVEIS DO CARRINHO
============================ */
let carrinho = [];

let modal = document.getElementById("carrinhoModal");
let pagamentoModal = document.getElementById("pagamentoModal");

let btnCarrinho = document.getElementById("btnCarrinho");
let fechar = document.getElementById("fecharCarrinho");
let fecharPagamento = document.getElementById("fecharPagamento");

let itensCarrinho = document.getElementById("itensCarrinho");
let totalTexto = document.getElementById("total");

/* ============================
      ABRIR / FECHAR MODAL
============================ */
btnCarrinho.onclick = () => modal.style.display = "block";
fechar.onclick = () => modal.style.display = "none";
fecharPagamento.onclick = () => pagamentoModal.style.display = "none";

window.onclick = function(e) {
  if (e.target === modal) modal.style.display = "none";
  if (e.target === pagamentoModal) pagamentoModal.style.display = "none";
};

/* ============================
      ADICIONAR AO CARRINHO
============================ */
function addCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
  alert(produto + " adicionado ao carrinho!");
}

/* ============================
      ATUALIZAR CARRINHO
============================ */
function atualizarCarrinho() {
  itensCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    itensCarrinho.innerHTML += `<li>${item.produto} — R$ ${item.preco.toFixed(2)}</li>`;
    total += item.preco;
  });

  totalTexto.textContent = "Total: R$ " + total.toFixed(2);
}

/* ============================
      FINALIZAR COMPRA
============================ */
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  modal.style.display = "none";
  pagamentoModal.style.display = "block";
}
