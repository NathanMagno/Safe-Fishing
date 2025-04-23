listaEmails = [
    "nathan.magno@email.com",
    "dona.jo@email.com",
    "lucas@email.com",
    "fiap@email.com"
]


const validarEmail = (email)=>{

    let msg = document.querySelector(".valida-email");

    for (let u = 0; u < listaEmails.length; u++) {
        
        if ((email.value == listaEmails[u]))
        {
          
            localStorage.setItem("email-recuperacao", JSON.stringify(listaEmails[u]));
            const modalCodigo = document.querySelector("dialog");
            
            document.querySelector("form").reset();

            modalCodigo.showModal();

            const msgCodigo = document.querySelector("#msg-codigo");  
         
            msgCodigo.textContent = `Enviamos uma mensagem com o código de verificação para o ` +
            `email ${listaEmails[u]}. ` + "Informe o código de verificação"

                 return false;
        }
        
    }   

            msg.setAttribute("class", "negado");
            msg.textContent = "O email inserido não foi encontrado em nosso sistema"
            document.querySelector("form").reset();

            setTimeout(()=>{
                msg.setAttribute("class", "valida-email");
                msg.textContent = "";
            }, 5000);
            
      
           
            return false;
    } 


function codigo(input){
    let msgValidaCodigo = document.querySelector(".alerta-codigo");
    if (input.value > 0)
    {
        msgValidaCodigo.setAttribute("class", "sucesso");
        msgValidaCodigo.textContent = "Código validado com sucesso";
          setTimeout(() => {
    window.location.href = "../html/nova-senha.html";}, 4000);
    }
    else{
        msgValidaCodigo.setAttribute("class", "negado");
        msgValidaCodigo.textContent = "Informe o código de verificação";
    
    setTimeout(() => {
      msgValidaCodigo.setAttribute("class", "alerta-codigo");
      msgValidaCodigo.textContent = "";
    }, 4000);
    }
  
}