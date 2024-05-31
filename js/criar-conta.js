
let criarUser =  {nome: "", emailUsuario: "", senhaUsuario: "", cpf: 0 } ;


const criarConta = (nomeU, cpfU, emailU, senhaU) => {

  criarUser.nome = nomeU.value;
  criarUser.cpf = cpfU.value;
  criarUser.emailUsuario = emailU.value;
  criarUser.senhaUsuario = senhaU.value;

  localStorage.setItem("novaConta", JSON.stringify(criarUser));




  return false;
}

