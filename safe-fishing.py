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

print(f"Seja bem vindo ao Safe Fishing, um lugar seguro para você realizar sua pesca!" +
      f"\nVamos começar:\n\n1 -> Caso já tenha uma conta em nossa plataforma\n2 -> Criar nova conta")

escolha = entrada_valor_numerico()

erro_entrada(escolha, 2)

