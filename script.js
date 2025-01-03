// Seleção dos botões
const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");

// Adiciona evento de clique para o botão "Sim"
btnSim.addEventListener("click", () => {
    btnSim.classList.add("active");
    btnNao.classList.remove("active");
    console.log("Produto disponível para venda.");
});

// Adiciona evento de clique para o botão "Não"
btnNao.addEventListener("click", () => {
    btnNao.classList.add("active");
    btnSim.classList.remove("active");
    console.log("Produto indisponível para venda.");
});

// Formulário submetido
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const produtoNome = document.getElementById("name").value;
    const descricao = document.getElementById("product").value;
    const valor = document.getElementById("number").value;
    const disponibilidade = btnSim.classList.contains("active")
        ? "Disponível"
        : btnNao.classList.contains("active")
        ? "Indisponível"
        : "Não especificado";

    console.log(`
        Produto: ${produtoNome}
        Descrição: ${descricao}
        Valor: ${valor}
        Disponibilidade: ${disponibilidade}
    `);

    alert("Formulário enviado com sucesso!");
});
