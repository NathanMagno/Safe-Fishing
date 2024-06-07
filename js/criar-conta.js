let criarUser = { nome: "", emailUsuario: "", senhaUsuario: "", cpf: 0 };



const criarConta = (nomeU, cpfU, emailU, senhaU) => {
  
  let msgCC = document.querySelector(".valida-cc");

  if (!nomeU.value || !cpfU.value || !emailU.value || !senhaU.value) {
    msgCC.setAttribute("class", "negado");
    msgCC.textContent = "Por favor, preencha todos os campos obrigatóros";
    
    setTimeout(() => {
      msgCC.setAttribute("class", "valida-cc");
      msgCC.textContent = "";
    }, 4000);

    return false;
  }

  criarUser.nome = nomeU.value;
  criarUser.cpf = cpfU.value;
  criarUser.emailUsuario = emailU.value;
  criarUser.senhaUsuario = senhaU.value;

  localStorage.setItem("novaConta", JSON.stringify(criarUser));
  window.location.href = "../html/login.html";

  return false;
};
