listaEmails = [
    "nathan.magno@email.com",
    "dona.jo@email.com",
    "lucas@email.com",
    "fiap@email.com"
]


const validar_email = (email)=>{

    let msg = document.querySelector(".valida-email");

    for (let u = 0; u < listaEmails.length; u++) {
        
        if ((email.value == listaEmails[u]))
        {
          
            const modal_codigo = document.querySelector("dialog");
            
            document.querySelector("form").reset();

            modal_codigo.showModal();

            const msg_codigo = document.querySelector("#msg-codigo");  
         
            msg_codigo.textContent = `Enviamos uma mensagem com o código de verificação para o ` +
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
    if (input.value > 0)
    {
    window.location.href = "../html/nova-senha.html";
    }
    else{
        console.log("Código inváido");
    }
}