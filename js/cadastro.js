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
    else
    {
        console.log("Não encontrou");
    }
  

listaUsuario = [
{nome:"Nathan Magno", emailUsuario: "nathan.magno@email.com", senhaUsuario: "123456", idade:19, altura:1.70},
{nome:"Dona Jo", emailUsuario: "dona.jo@email.com", senhaUsuario: "horadocafe", idade: 59, altura: 1.65},
{nome:"Lucas poucas", emailUsuario: "lucas@email.com", senhaUsuario: "nsei", idade: 26, altura: 1.78},
{nome:"Mr. Fiap", emailUsuario: "fiap@email.com", senhaUsuario: "euestouaqui", idade: 44, altura: 1.52},
];



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

