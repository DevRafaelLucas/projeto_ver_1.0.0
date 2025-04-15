// Captura o input range de preço
const rangePreco = document.getElementById("rangePreco");
// Captura o span que exibe o valor do range
const valorRange = document.getElementById("valorRange");

// Atualiza o texto do span conforme o usuário mexe na barra de preço
rangePreco.addEventListener("input", () => {
  valorRange.textContent = rangePreco.value;
});

// Lógica de mudança de categoria (Populares, Novos, Vintage)
const botoesCategoria = document.querySelectorAll(".categoriaBtn");
botoesCategoria.forEach((botao) => {
  botao.addEventListener("click", () => {
    
    // Remove a classe 'ativo' de todos os botões
    botoesCategoria.forEach((b) => b.classList.remove("ativo"));

    // Adiciona a classe 'ativo' ao botão clicado
    botao.classList.add("ativo");

    // Pegamos a categoria atual
    const categoria = botao.dataset.categoria;

    // Exemplo de como poderíamos filtrar (lógica fictícia)
    // Por enquanto, apenas exibe no console a categoria.
    console.log("Categoria selecionada:", categoria);

    // AQUI você poderia filtrar os produtos de fato...
  });
});

// Exemplo de clique no botão Filtrar
const botaoFiltrar = document.getElementById("botaoFiltrar");
botaoFiltrar.addEventListener("click", () => {

  // Aqui você pode implementar uma lógica para filtrar
  // de acordo com as checkboxes marcadas e o valor do range, etc.
  console.log("Filtros aplicados!");

  // Exemplo simples: alert
  alert("Filtros aplicados! (Exemplo)");

});
