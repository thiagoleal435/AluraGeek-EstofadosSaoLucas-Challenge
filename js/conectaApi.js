async function todosOsProdutos() {
    const resposta = await fetch("http://localhost:3000/produtos");
    const produtos = await resposta.json();
    return produtos;
}

async function produtosDaCategoria(categoria) {
    const resposta = await fetch(`http://localhost:3000/produtos?categoria=${categoria}`)
    const produtos = await resposta.json();
    return produtos;
}

async function buscaProdutos(dadoDaPesquisa) {
    const resposta = await fetch(`http://localhost:3000/produtos?q=${dadoDaPesquisa}`)
    const produtos = await resposta.json();
    return produtos;
}

async function mostraDetalhesDoProduto(nome) {
    const resposta = await fetch(`http://localhost:3000/produtos?nome=${nome}`);
    const produto = await resposta.json();
    return produto;
}

async function adicionaProduto(id, nome, preco, imagem, alt, precoPrazo, categoria) {
    const resposta = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            preco: preco.toFixed(2),
            imagem: imagem,
            alt: alt,
            precoPrazo: precoPrazo,
            categoria: categoria,
        })
    });
    if (!resposta.ok) {
        throw new Error("Não foi possível adicionar o produto!")
    }
    const produto = await resposta.json();
    return produto;
}

async function buscaLogin() {
    const resposta = await fetch("http://localhost:3000/userAdm");
    const usuario = await resposta.json();
    return usuario;
}

export default function criarCaixaDeProduto(listaApi, listaUl) {
    listaApi.forEach(produto => listaUl.innerHTML += `
    <li class="caixa__produto">
    <img src="${produto.imagem}" alt="${produto.alt}" class="produto__img">
    <p class="produto__descricao">${produto.nome}</p>
    <h3 class="produto__valor">R$${produto.preco}</h3>
    <p class="produto__desconto">5% de desconto à vista ou em 1x no cartão</p>
    <h3 class="produto__valorprazo">Ou em 10x de R$${(produto.precoPrazo / 10).toFixed(2)} no cartão de crédito</h3>
    <a id="botao-link" class="botao" href="ver-detalhes.html">
        <botton class="produto__botao">Ver detalhes</botton>
    </a>
    </li>`
    );
}

export const conectaApi = {
    todosOsProdutos,
    produtosDaCategoria,
    buscaProdutos,
    adicionaProduto,
    buscaLogin,
    criarCaixaDeProduto,
    mostraDetalhesDoProduto
}