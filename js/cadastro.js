const esconde = document.querySelector("dialog");

const btnEsconde = document.querySelector("#entrar-modal");
const btnFechar = document.getElementById("btn-fechar");


btnEsconde.addEventListener("click",() => {
 esconde.showModal();
});
    if (btnFechar)
    {
     btnFechar.addEventListener("click",() => {
    esconde.close();
    });
    }
  
const novoUsuario = JSON.parse(localStorage.getItem("novaConta")); 
const novaSenha = JSON.parse(localStorage.getItem("senhaUser"));
const emailRecuperacao = JSON.parse(localStorage.getItem("email-recuperacao"));

let listaUsuario = [
{nome:"Nathan Magno", emailUsuario: "nathan.magno@email.com", senhaUsuario: "123456", cpf: 50232254254},
{nome:"Dona Jo", emailUsuario: "dona.jo@email.com", senhaUsuario: "horadocafe", cpf: 53424534575},
{nome:"Lucas poucas", emailUsuario: "lucas@email.com", senhaUsuario: "nsei", cpf: 51424334573},
{nome:"Mr. Fiap", emailUsuario: "fiap@email.com", senhaUsuario: "euestouaqui", cpf: 73423563565},
];

if (emailRecuperacao != null)
{
    for (let u = 0; u < listaUsuario.length; u++) 
    {
        
        if (emailRecuperacao == listaUsuario[u].emailUsuario)
        {
            listaUsuario[u].senhaUsuario = novaSenha;
        
        }
    }   
}

if (novoUsuario){
    listaUsuario.push(novoUsuario);
    
}



const validar = (email, senha)=>{

    let msg = document.querySelector(".valida");

    for (let u = 0; u < listaUsuario.length; u++) {
        
        if ((email.value == listaUsuario[u].emailUsuario) && (senha.value == listaUsuario[u].senhaUsuario))
        {
            localStorage.setItem("validado", JSON.stringify(listaUsuario[u])); 
            msg.setAttribute("class", "sucesso");
            msg.textContent = "Login realizado com Sucesso!"
            document.querySelector("form").reset();

            setTimeout(()=>{
            window.location.href = "../html/tela-inicial.html";
            }, 3000);
           
                 return false;
        }
        
    }   

            msg.setAttribute("class", "negado");
            msg.textContent = "Email ou senha inválidos!"
            document.querySelector("form").reset();

            setTimeout(()=>{
                msg.setAttribute("class", "valida");
                msg.textContent = "";
            }, 3000);
            
      
           
            return false;
    }

