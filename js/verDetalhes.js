import { conectaApi } from "./conectaApi.js";
import criarCaixaDeProduto from "./conectaApi.js";

function obterParametroDeConsulta(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

async function mostrarDetalhesESimilares(nomeDoProduto) {
    const caixaInfo = document.querySelector("[data-detalhes]");
    // const listaSimilares = document.querySelector("[data-lista]");
    const produto = await conectaApi.mostraDetalhesDoProduto(nomeDoProduto);
    // const produtosSimilares = await conectaApi.produtosDaCategoria(produto.categoria)

    caixaInfo.innerHTML = `
    <div class="detalhe__imagem">
        <img src="${produto.imagem}" alt="${produto.alt}" class="detalhe__img">
    </div>
    <div class="detalhe__info" data-info>
        <h2 class"detalhe__nome">${produto.nome}</h2>
        <h3 class="detalhe__valor">R$${produto.preco}</h3>
        <p class="detalhe__desconto">$5% de desconto à vista ou em 1x no cartão</p>
        <h3 class="detalhe__valorprazo">Ou em 10x de R$${produto.precoPrazo / 10}</h3>
        <p class="detalhe__descricao"></p>
    </div>
    `;
    // criarCaixaDeProduto(produtosSimilares, listaSimilares);
}

const nome = obterParametroDeConsulta('nome')
mostrarDetalhesESimilares(nome);