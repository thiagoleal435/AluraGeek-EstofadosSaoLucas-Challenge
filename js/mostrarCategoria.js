import { conectaApi } from "./conectaApi.js";
import criarCaixaDeProduto from "./conectaApi.js";

function obterParametroDeConsulta(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

async function listarProdutosDaCategoria(categoria) {
    const lista = document.querySelector("[data-lista]")
    const titulo = document.querySelector("[data-titulo]")
    const listaApi = await conectaApi.produtosDaCategoria(categoria);
    titulo.innerHTML = `Categoria : ${categoria}`;
    criarCaixaDeProduto(listaApi, lista);
}

const categoriaSelecionada = obterParametroDeConsulta('categoria');
listarProdutosDaCategoria(categoriaSelecionada);
