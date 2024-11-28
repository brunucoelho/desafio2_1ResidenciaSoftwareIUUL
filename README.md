# Conversor de Moedas

Desafio 2.1 proposto pelo projeto de residência em Software, realiazado pela [iUUL](https://iuul.com.br/) O desafio coinsiste em um programa de conversão de moedas desenvolvido em **Node.js**. Ele utiliza a [ExchangeRate-API](https://www.exchangerate-api.com/) para obter as taxas de câmbio em tempo real.

## 📋 Funcionalidades

- Permite converter valores entre diferentes moedas.
- Garante que a moeda de origem seja diferente da moeda de destino.
- Valida entradas do usuário (moedas com 3 caracteres, valores maiores que zero, etc.).
- Exibe a taxa de câmbio com 6 casas decimais e o valor convertido com 2 casas decimais.
- Encerra o programa quando o usuário pressiona *Enter* sem digitar a moeda de origem.
- Tratamento de erros:
  - Comunicação com a API.
  - Moedas inválidas ou não suportadas.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Prompt-sync](https://www.npmjs.com/package/prompt-sync): Para leitura de entrada do usuário.
- [ExchangeRate-API](https://www.exchangerate-api.com/): Para obter as taxas de câmbio.

---

## 📂 Estrutura do Projeto

```plaintext
.
├── app.js           # Arquivo principal
├── exchangeRate.js  # Contém a lógica para comunicação com a API
├── apiKey.js        # Chave da API
└── package.json     # Dependências do projeto
```

- **`app.js`**: Gerencia o fluxo do programa, valida entradas e exibe os resultados.
- **`exchangeRate.js`**: Contém a função que acessa a API e retorna a taxa de câmbio.
- **`apiKey.js`**: Armazena a chave da API.

---

## 📦 Pré-requisitos

- Node.js instalado.
- Uma conta e chave de API válida da [ExchangeRate-API](https://www.exchangerate-api.com/).

---

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/conversor-de-moedas.git
   cd conversor-de-moedas
   ```

2. Instale as dependências:
   ```bash
   npm install prompt-sync
   ```

3. Crie o arquivo `apiKey.js` na raiz do projeto e adicione sua chave de API:
   ```javascript
   const API_KEY = "SUA_CHAVE_DE_API_AQUI";
   module.exports = API_KEY;
   ```

---

## ▶️ Uso

1. Execute o programa com:
   ```bash
   node app.js
   ```

2. Siga as instruções no terminal:
   - Digite a **moeda de origem** (exemplo: USD).
   - Digite a **moeda de destino** (exemplo: BRL).
   - Digite o **valor a ser convertido**.

3. O programa exibirá:
   - O valor convertido.
   - A taxa de câmbio utilizada.

4. Para encerrar o programa, pressione *Enter* sem digitar a moeda de origem.

---

## 🔧 Exemplo de Execução

```plaintext
=== Conversor de Moedas ===

Moeda Origem : USD
Moeda Destino: BRL
Valor a ser convertido: 100

Buscando taxas de câmbio...

USD 100.00 => BRL 505.00.
Taxa de câmbio: 5.050000

---
```

---

## 🛡️ Tratamento de Erros

- **Moeda de origem igual à moeda de destino**: O programa solicita uma nova entrada.
- **Entradas inválidas**: Mensagens de erro claras são exibidas, e o programa solicita uma nova entrada.
- **Erro na API**: O programa exibe a mensagem de erro correspondente.

---

## 📄 Autor

Este projeto é open-source. Você pode usá-lo e modificá-lo conforme necessário. Para mais informações, entre em contato comigo.
[@brunucoelho](https://www.linkedin.com/in/brunucoelho/)

---
