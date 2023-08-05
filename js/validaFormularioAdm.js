const nomeDoProduto = document.querySelector("[data-nome]");
const nomesValidos = ['Sofá', 'Poltrona', 'Cabeceira', 'Painel'];
const preco = document.querySelector("[data-precoPrazo]");
const descricao = document.querySelector("[data-descricao]");
let nomeValido = false;
let precoValido = false;
let descricaoValida = false;

const validaFormularioAdm = () => {
    if (nomeValido && precoValido && descricaoValida) {
        alert("Produto adicionado com sucesso!");
    } else {
        alert("Erro ao adicionar produto!");
    }
}

nomeDoProduto.addEventListener('blur', () => {
    const spanNome = document.querySelector(".span__adm__nome");
    const primeiroNome = nomeDoProduto.value.split(" ")[0];
    const validaNome = nomesValidos.includes(primeiroNome);
    if (!validaNome) {
        spanNome.textContent = "O nome do produto deve conter inicialmente uma das categorias disponíveis!";
        nomeValido = false;
    } else {
        spanNome.textContent = "";
        nomeValido = true;
    }
})

preco.addEventListener('blur', () => {
    const spanPreco = document.querySelector(".span__adm__preco");
    const regex = /^[0-9]+$/;
    if (!regex.test(preco.value.trim())) {
        spanPreco.textContent = "Insira o valor do produto sem caracteres especiais!";
        precoValido = false;
    } else {
        spanPreco.textContent = "";
        precoValido = true;
    }
})

descricao.addEventListener('blur', () => {
    const spanDescricao = document.querySelector(".span__adm__descricao");
    if (descricao.value.length < 30 && descricao.value.split(" ").length < 3) {
        spanDescricao.textContent = "Adicione mais detalhes a descrição!";
        descricaoValida = false;
    } else {
        spanDescricao.textContent = "";
        descricaoValida = true;
    }
})