import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]");

function obterParametroDeConsulta(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

async function preencherFormularioComDadosDoProduto() {
    const id = obterParametroDeConsulta('id');
    const produto = await conectaApi.mostraDetalhesDoProduto(id);
    document.querySelector("[data-id]").value = produto[0].id;
    document.querySelector("[data-imagem]").value = produto[0].imagem;
    document.querySelector("[data-nome]").value = produto[0].nome;
    document.querySelector("[data-precoPrazo]").value = produto[0].precoPrazo;
    document.querySelector("[data-descricao]").value = produto[0].descricao;
    document.querySelector(`input[name="categoria"][value="${produto[0].categoria}"]`).checked = true;
    document.querySelector("[data-submit]").value = "Atualizar produto";
}

function atualizaProduto(evento) {
    evento.preventDefault();

    const id = document.querySelector("[data-id]").value;
    const nome = document.querySelector("[data-nome]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const precoPrazo = document.querySelector("[data-precoPrazo]").value;
    const preco = precoPrazo - ((precoPrazo * 5) / 100);
    const categoria = document.querySelector('input[name="categoria"]:checked').value;
    const alt = categoria;
    const descricao = document.querySelector("[data-descricao]").value;

    try {
        conectaApi.atualizarProduto(id, nome, preco, imagem, alt, precoPrazo, categoria, descricao);
        window.location.href = "adm.html"
    } catch (e) {
        alert(e);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await preencherFormularioComDadosDoProduto();
})

document.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("produto__botao")) {
        const idDoProduto = evento.target.dataset.id;
        window.location.href = `ver-detalhes.html?id=${idDoProduto}`;
    }
});

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    atualizaProduto(evento)
})