import { conectaApi } from "./conectaApi.js";

function deletaProduto(evento) {
    evento.preventDefault();
    const idDoProduto = evento.target.dataset.id;

    try {
        conectaApi.deletarProduto(idDoProduto);
        window.location.href = "adm.html";
    } catch {
        alert("Erro ao deletar produto!");
    }
}

document.querySelector(".adm__lista").addEventListener("click", (evento) => {
    if (evento.target.classList.contains("produto__excluir")) {
        evento.preventDefault()
        deletaProduto(evento);
    }
});

