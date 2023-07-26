import { conectaApi } from "./conectaApi.js";
import criarCaixaDeProduto from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

async function listarProdutos() {
    try {
        const listaApi = await conectaApi.todosOsProdutos();
        criarCaixaDeProduto(listaApi, lista);
    } catch {
        lista.innerHTML = '<h2 class="categoria__titulo">Não foi possível carregar a lista de produtos!</h2>'
    }

}

listarProdutos();

