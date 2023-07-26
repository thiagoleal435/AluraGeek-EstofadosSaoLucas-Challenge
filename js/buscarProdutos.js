import { conectaApi } from "./conectaApi.js";
import criarCaixaDeProduto from "./conectaApi.js";

function obterParametroDeConsulta(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

async function listarProdutosDaBusca() {
    const lista = document.querySelector("[data-lista]");
    const dadoDaPesquisa = obterParametroDeConsulta('q');
    const listaDaBusca = await conectaApi.buscaProdutos(dadoDaPesquisa);
    const titulo = document.querySelector("[data-titulo]");

    criarCaixaDeProduto(listaDaBusca, lista);

    if (listaDaBusca.length > 0) {
        titulo.textContent = `Todos os produtos relacionados a "${dadoDaPesquisa}"`;
    } else {
        titulo.innerHTML = `Nenhum produto relacionado a "${dadoDaPesquisa}" encontrado!`;
    }
}

listarProdutosDaBusca();
