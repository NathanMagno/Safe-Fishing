const btn_salvar = document.querySelector("#btn-salvar-senha");

console.log("nao");

function salve(senha){

    const senha_usuario = senha.value;
    console.log(senha.value);
    localStorage.setItem("userSenha", JSON.stringify(senha_usuario))
    console.log("foi o btn");
    setTimeout(window.location.href = "../html/login.html" ,2000);

    return false;
}