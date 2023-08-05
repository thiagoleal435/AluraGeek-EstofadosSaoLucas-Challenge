import { conectaApi } from "./conectaApi.js";
import criarCaixaDeProduto from "./conectaApi.js";

function obterParametroDeConsulta(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

async function controiCaixaDeDetalhes(produto, container) {
    produto.forEach(item => container.innerHTML += `
    <div class="detalhe__imagem">
        <img src="${item.imagem}" alt="${item.alt}" class="detalhe__img">
    </div>
    <div class="detalhe__info" data-info>
        <h2 class="detalhe__nome">${item.nome}</h2>
        <h3 class="detalhe__valor">R$${item.preco}</h3>
        <p class="detalhe__desconto">$5% de desconto à vista ou em 1x no cartão</p>
        <h3 class="detalhe__valorprazo">Ou em 10x de R$${(item.precoPrazo / 10).toFixed(2)}</h3>
        <p class="detalhe__descricao">${item.descricao}</p>
    </div>
    `);
}

async function mostrarDetalhesESimilares(idDoProduto) {
    const caixaInfo = document.querySelector("[data-detalhes]");
    const listaSimilares = document.querySelector("[data-lista]");
    const produto = await conectaApi.mostraDetalhesDoProduto(idDoProduto);
    const produtosSimilares = await conectaApi.produtosDaCategoria(produto[0].categoria)

    await controiCaixaDeDetalhes(produto, caixaInfo);
    criarCaixaDeProduto(produtosSimilares, listaSimilares);
}

const id = obterParametroDeConsulta('id')

document.addEventListener("DOMContentLoaded", async () => {
    await mostrarDetalhesESimilares(id);
})

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("produto__botao")) {
        event.preventDefault();
        const idDoProduto = event.target.dataset.id;
        window.location.href = `ver-detalhes.html?id=${idDoProduto}`;
    }
});