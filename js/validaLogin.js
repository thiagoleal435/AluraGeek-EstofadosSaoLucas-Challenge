import { conectaApi } from "./conectaApi.js";

async function validaFormulario() {
    const userAdm = await conectaApi.buscaLogin();
    const email = document.querySelector("[data-email]").value;
    const senha = document.querySelector("[data-senha]").value;

    if (userAdm.email == email && userAdm.senha == senha) {
        window.location.href = "AluraGeek-EstofadosSaoLucas-Challenge/adm.html";
    } else {
        alert("O email ou senha do usuário administrador está incorreto!")
        document.querySelector("[data-formulario-login]").reset();
    }
}

document.querySelector("[data-formulario-login]").addEventListener('submit', evento => {
    evento.preventDefault();
    validaFormulario();
});