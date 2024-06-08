const salve = (senha)=> {

    const novaSenha = senha.value;
    
    localStorage.setItem("senhaUser", JSON.stringify(novaSenha));
    window.location.href = "../html/login.html";

    return false;
}