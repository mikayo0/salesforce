import aiohttp
import asyncio

async def gerar_pessoa():
    url = "https://www.4devs.com.br/ferramentas_online.php"
    params = {
        "acao": "gerar_pessoa",
        "sexo": "I",
        "pontuacao": "S",
        "idade": "0",
        "cep_estado": "",
        "cep_cidade": "",
        "txt_qtde": "1"
    }

    async with aiohttp.ClientSession() as session:
        async with session.get(url, params=params) as response:
            if response.status == 200:
                dados = await response.json()
                print("Pessoa gerada:")
                print(dados[0])  # A resposta vem como lista com um dicionário
            else:
                print(f"Erro: {response.status}")

# Executar a função async
#asyncio.run(gerar_pessoa())