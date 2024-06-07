
let criarUser =  {nome: "", emailUsuario: "", senhaUsuario: "", cpf: 0 } ;


const criarConta = (nomeU, cpfU, emailU, senhaU) => {

  if (!nomeU.value || !cpfU.value || !emailU.value || !senhaU.value) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  else
  {

    criarUser.nome = nomeU.value;
    criarUser.cpf = cpfU.value;
    criarUser.emailUsuario = emailU.value;
    criarUser.senhaUsuario = senhaU.value;

    return false;
  }

  localStorage.setItem("novaConta", JSON.stringify(criarUser));
  window.location.href = "../html/login.html";



  return false;
}

