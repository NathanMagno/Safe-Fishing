import time;
import random;
# Foi importada a biblioteca "time" para permitir execução de códigos que envolvam manipulação
# de tempo, como fazer o usuário esperar para realizar novas tentativas de login.
# A Biblioteca random foi importada para permitir algumas simulações de cenários reais, como por exemplo,
# simular possíveis locais de pesca próximos aos usuário.

# Para casos em que o usuário terá que realizar uma escolha no menu interativo e o mesmo digitar uma
# entrada inválida

def erro_entrada(entrada, qtdAlternativas):
    if qtdAlternativas == 1:
        while entrada != 1 :
            entrada = int(input(f"Entrada inválida\n"))
    elif qtdAlternativas == 2:
        while entrada != 1 and entrada != 2 :
            entrada = int(input(f"Entrada inválida\n"))
    elif qtdAlternativas == 3:
        while entrada != 1 and entrada != 2 and entrada != 3  :
            entrada = int(input(f"Entrada inválida\n"))
    else:
        pass
    return entrada

def entrada_valor():
    entrada = input(f"\n")
    return entrada

def entrada_valor_numerico():
    entrada = int(input(f"\n"))
    return entrada

def valida_email(entrada):
    tem = False
    if "@" in entrada:
        tem = True
    while tem == False:
        print(f"\nInsira o caractere '@' para a validação de seu email")
        entrada = entrada_valor()
        if "@" in entrada:
            tem = True
    return entrada
    
def criar_email(email):
    print(f"\nVamos começar o processo de criação de conta\nDigite seu email")
    email = entrada_valor()
    email = valida_email(email)
    return email

def valida_senha(entrada):
    valido = False
    while valido == False:
        temNumero = any(char.isdigit() for char in entrada)
        temLetra = any(char.isalpha() for char in entrada)
        tamanho = len(entrada) > 8
        if temLetra == True and temNumero == True and tamanho == True:
            valido = True
        else:
            print(f"Sua senha não cumpre os requisitos necessários!" +
                    f"\nLeia os requisitos com atenção e insira uma senha que os cumpra.")
            entrada = entrada_valor()
        
    return entrada
        
def criar_senha(senha):
    print(f"\nAgora, crie uma senha forte, seguindo as seguintes regras:" +
          f"\nMínimo 8 caracteres\nconter números\nconter letras")
    senha = entrada_valor()
    senha = valida_senha(senha)
    return senha

def login(email, senha):
    print("\nO usuário foi direcionado para a tela de login\n\n" +
          f"1 -> caso tenha esquicido sua senha\n2 -> Realizar login")
    escolha = entrada_valor_numerico()
    escolha = erro_entrada(escolha, 2)
    
    if escolha == 1:
        print("legal fera")
    
    if escolha == 2:
        print(f"\nInforme seu email: ")
        email_login = entrada_valor()
        print(f"\nInforme sua senha: ")
        senha_login = entrada_valor()
        contador_tentativas = 3
        
        while email_login != email or senha_login != senha:

            contador_tentativas -= 1
            print(f"Email ou senha estão incorretos, por favor, preencha os campos novamente\n"
            +f"Você ainda possui {contador_tentativas} tentativas")
    
            if contador_tentativas <= 0:
                print(f"Você atingiu a quantidade limite de tentativas, tente novamente após 10 segundos.")
                time.sleep(10.0)
                contador_tentativas = 3
    
            email_login = input(f"\nInforme seu email: ")
            senha_login = input(f"\nInforme sua senha: ")

        if email == email_login and senha == senha_login:
            print(f"Acesso liberado")
            
        


emailUser = None 
senhaUser = None

print(f"Seja bem vindo ao Safe Fishing, um lugar seguro para você realizar sua pesca!" +
      f"\nVamos começar:\n\n1 -> Caso já tenha uma conta em nossa plataforma\n2 -> Criar nova conta")

escolha = entrada_valor_numerico()

erro_entrada(escolha, 2)

if escolha == 1:
    if emailUser == None or senhaUser == None:
        print(f"Você não possui cadastro em nossa plataforma\nVocê deseja ser direcionado para a tela de criar conta?"
              +f"\n\n1 -> Sim\n2 -> Não, desejo sair da plataforma")
        escolhaUser = entrada_valor_numerico()
        erro_entrada(escolhaUser, 2)
        if escolhaUser == 1:
             print(f"Vamos começar a criação de sua conta!\n")
             emailUser = criar_email(emailUser)
             senhaUser = criar_senha(senhaUser)
             login(emailUser, senhaUser)
             
        else:
            exit()
            
    else:
        login(emailUser, senhaUser)
    
else:
    emailUser = criar_email(emailUser)
    senhaUser = criar_senha(senhaUser)
    login(emailUser, senhaUser)
    
    
# Agora o usuário já está dentro da plataforma, na tela inicial

