from faker import Faker
import json
import random
import os

fake = Faker('pt_BR')

quantidade = 5  # você pode parametrizar isso se quiser
pessoas = []

for _ in range(quantidade):
    pessoa = {
        "nome": fake.name(),
        "cpf": fake.cpf(),
        "idade": random.randint(18, 60),
        "cep": fake.postcode(),
        "cidade": fake.city(),
        "estado": fake.estado_sigla()
    }
    pessoas.append(pessoa)

# Salva o array no JSON
output_path = os.path.join("cypress", "fixtures", "pessoas_geradas.json")
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(pessoas, f, ensure_ascii=False, indent=2)