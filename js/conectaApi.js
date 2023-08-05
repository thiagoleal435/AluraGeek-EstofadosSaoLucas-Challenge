const apiUrl = "https://estofados-sao-lucas-b658e17b3f1b.herokuapp.com/";

async function todosOsProdutos() {
    const resposta = await fetch(`${apiUrl}/produtos`);
    const produtos = await resposta.json();
    return produtos;
}

async function produtosDaCategoria(categoria) {
    const resposta = await fetch(`${apiUrl}produtos?categoria=${categoria}`);
    const produtos = await resposta.json();
    return produtos;
}

async function buscaProdutos(dadoDaPesquisa) {
    const resposta = await fetch(`${apiUrl}/produtos?q=${dadoDaPesquisa}`)
    const produtos = await resposta.json();
    return produtos;
}

async function mostraDetalhesDoProduto(id) {
    const resposta = await fetch(`${apiUrl}/produtos?id=${id}`);
    const produto = await resposta.json();
    return produto;
}

async function adicionaProduto(id, nome, preco, imagem, alt, precoPrazo, categoria, descricao) {
    const resposta = await fetch(`${apiUrl}/produtos`, {
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
            descricao: descricao,
        })
    });
    if (!resposta.ok) {
        throw new Error("Não foi possível adicionar o produto!")
    }
    const produto = await resposta.json();
    return produto;
}

async function deletarProduto(id) {
    const resposta = await fetch(`${apiUrl}/produtos/${id}`, {
        method: "DELETE",
    });
    if (!resposta.ok) {
        throw new Error("Erro ao remover o produto!")
    }
    const produto = await resposta.json();
    return produto;
}

async function atualizarProduto(id, nome, preco, imagem, alt, precoPrazo, categoria, descricao) {
    const resposta = await fetch(`${apiUrl}/produtos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            alt: alt,
            precoPrazo: precoPrazo,
            categoria: categoria,
            descricao: descricao,
        })
    });
    if (!resposta.ok) {
        throw new Error('Erro ao atualizar produto');
    }
    const produto = await resposta.json();
    return produto;
}


async function buscaLogin() {
    const resposta = await fetch(`${apiUrl}/userAdm`);
    const usuario = await resposta.json();
    return usuario;
}

export default function criarCaixaDeProduto(listaApi, listaUl) {
    listaApi.forEach(produto => listaUl.innerHTML += `
    <li class="caixa__produto">
    <div class="produto__imagem">
    <img src="${produto.imagem}" alt="${produto.alt}" class="produto__img">
    <buttom class="produto__excluir" data-id="${produto.id}"><i class="fa-solid fa-trash icone__excluir"></i></buttom>
    <buttom class="produto__editar" data-id="${produto.id}"><i class="fa-solid fa-pen icone__editar"></i></buttom>
    </div>
    <p class="produto__id">${produto.id}</p>
    <p class="produto__descricao">${produto.nome}</p>
    <h3 class="produto__valor">R$${produto.preco}</h3>
    <p class="produto__desconto">5% de desconto à vista ou em 1x no cartão</p>
    <h3 class="produto__valorprazo">Ou em 10x de R$${(produto.precoPrazo / 10).toFixed(2)} no cartão de crédito</h3>
    <botton id="botao-link" class="produto__botao botao" data-id    ="${produto.id}">Ver detalhes</botton>
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
    mostraDetalhesDoProduto,
    deletarProduto,
    atualizarProduto
}