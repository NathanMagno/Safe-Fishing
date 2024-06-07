let criarUser = { nome: "", emailUsuario: "", senhaUsuario: "", cpf: 0 };

const criarConta = (nomeU, cpfU, emailU, senhaU) => {
  let msg = document.querySelector(".valida-cc");

  if (!nomeU.value || !cpfU.value || !emailU.value || !senhaU.value) {
    msg.setAttribute("class", "negado");
    msg.textContent = "Por favor, preencha todos os campos.";

    setTimeout(() => {
      msg.setAttribute("class", "valida-cc");
      msg.textContent = "";
    }, 5000);

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
