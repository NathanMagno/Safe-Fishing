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

def quant_caracteres(entrada):
   while len(entrada) < 8 :
        print(f"\nEntrada inválida, você deve informar uma senha com no mínimo 8 caracteres: ")
        entrada = entrada_valor()
   return entrada

def criar_email(email):
    print(f"\nVamos começar o processo de criação de conta\nDigite seu email")
    email = entrada_valor()
    return email
    
def criar_senha(senha):
    print(f"\nAgora, crie uma senha forte, seguindo as seguintes regras:" +
          f"\nMínimo 8 caracteres\nconter números\nconter letras")
    senha = entrada_valor()
    return senha

def nao_tem_conta(email, senha):
        print(f"Você não possui cadastro em nossa plataforma\nVocê deseja ser direcionado para a tela de criar conta?"
              +f"\n\n1 -> Sim\n2 -> Não, desejo sair da plataforma")
        escolhaUser = entrada_valor_numerico()
        erro_entrada(escolhaUser, 2)
        if escolhaUser == 1:
             print(f"Vamos começar a criação de sua conta!\n")
        else:
            exit()

def login():
    pass



emailUser = None 
senhaUser = None

print(f"Seja bem vindo ao Safe Fishing, um lugar seguro para você realizar sua pesca!" +
      f"\nVamos começar:\n\n1 -> Caso já tenha uma conta em nossa plataforma\n2 -> Criar nova conta")

escolha = entrada_valor_numerico()

erro_entrada(escolha, 2)

if escolha == 1:
    if emailUser == None or senhaUser == None:
        nao_tem_conta(emailUser, senhaUser)
    else:
        login()
    
else:
    emailUser = criar_email(emailUser)
    senhaUser = criar_senha(senhaUser)
    login()

