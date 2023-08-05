const nome = document.getElementById("input-nome");
const mensagem = document.getElementById("textarea-mensagem");
let nomeValido = false;
let mensagemValida = false;

const validaFormularioRodape = () => {
    if (nomeValido && mensagemValida) {
        alert("Mensagem enviada com sucesso!");
        document.querySelector("[data-formulario-rodape]").reset();
    }
    else {
        alert("A mensagem não pôde ser enviada!\nTente novamente.");
    }
}

nome.addEventListener('blur', () => {
    const spanNome = document.querySelector(".span__nome");
    if (nome.value.split(" ").length < 2) {
        spanNome.textContent = "O nome deve conter também sobrenome!";
        nomeValido = false;
    } else {
        spanNome.textContent = "";
        nomeValido = true;
    }
})

mensagem.addEventListener('blur', () => {
    const spanMensagem = document.querySelector(".span__mensagem");
    if (mensagem.value.length < 20) {
        spanMensagem.textContent = "A mensagem deve conter pelo menos 20 caracteres!";
        mensagemValida = false;
    } else {
        spanMensagem.textContent = "";
        mensagemValida = true;
    }
})

document.querySelector("[data-formulario-rodape]").addEventListener('submit', (evento) => {
    evento.preventDefault();
    validaFormularioRodape();
})