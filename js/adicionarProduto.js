import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");
const botaoDeAdicionarImagem = document.querySelector("[data-add-imagem]")
const campoDeAmostraDaImagem = document.querySelector("[data-imagem]")

async function adicionarProduto(evento) {
    evento.preventDefault();

    const ultimoProduto = conectaApi.todosOsProdutos.length - 1;
    const id = ultimoProduto.id + 1;
    const imagem = document.querySelector("[data-imagem]").value;
    const categoria = document.querySelector('input[name="categoria"]:checked').value;
    const alt = categoria;
    const nome = document.querySelector("[data-nome]").value;
    const precoPrazo = document.querySelector("[data-precoPrazo]").value;
    const preco = precoPrazo - ((precoPrazo * 15) / 100);

    try {
        await conectaApi.adicionaProduto(id, nome, preco, imagem, alt, precoPrazo, categoria);
        window.location.href = "adm.html";
    } catch (e) {
        alert(e);
        formulario.reset();
    }
}

function preVisualizarImagem(evento) {
    const input = evento.target;
    const preImagem = document.querySelector("#preImagem");

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preImagem.src = e.target.result;
            preImagem.style.display = "block"
            document.querySelector(".adm__img").style.padding = "2.5%"
            document.querySelector("[data-icone]").style.display = "none";
            document.querySelector("[data-paragrafo]").style.display = "none";
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function abrirExploradorDeArquivos() {
    document.querySelector("[data-imagem]").click();
}

botaoDeAdicionarImagem.addEventListener('click', abrirExploradorDeArquivos);

campoDeAmostraDaImagem.addEventListener('change', evento => preVisualizarImagem(evento))

formulario.addEventListener('submit', evento => adicionarProduto(evento));