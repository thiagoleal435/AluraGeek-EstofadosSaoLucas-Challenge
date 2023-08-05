let imagens = document.getElementsByClassName("banner__imagem");
let backBtn = document.getElementsByClassName("banner__botao__back")[0];
let nextBtn = document.getElementsByClassName("banner__botao__next")[0];
let indiceAtual = 0;

mostrarImagem(indiceAtual);

backBtn.addEventListener("click", function () {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    }
    mostrarImagem(indiceAtual);
});

nextBtn.addEventListener("click", function () {
    indiceAtual++;
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    mostrarImagem(indiceAtual);
});

function mostrarImagem(indice) {
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove("active");
    }
    imagens[indice].classList.add("active");
}

document.querySelector("[data-botao-banner]").addEventListener('click', () => window.location.href = "todos-os-produtos.html");
