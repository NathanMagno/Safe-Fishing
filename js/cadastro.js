const esconde = document.querySelector("dialog");

const btnEsconde = document.querySelector("#entrar-modal");
const btnFechar = document.querySelector("#btn-fechar");

btnEsconde.addEventListener("click",()=>{
 esconde.showModal();
});

btnFechar.addEventListener("click",()=>{
    esconde.close();
});