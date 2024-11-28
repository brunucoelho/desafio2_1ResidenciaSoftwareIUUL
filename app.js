const prompt = require('prompt-sync')();
const API_KEY = require('./apiKey')
//const fetch = require("node-fetch");

// A chave de API está no arquivo apiKey.js

const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

// Função para buscar as taxas de câmbio
async function getExchangeRate(baseCurrency, targetCurrency) {
    try {
        const response = await fetch(`${BASE_URL}/latest/${baseCurrency}`);
        if (!response.ok) throw new Error("Erro ao buscar os dados da API");
        
        const data = await response.json();
        if (!data.conversion_rates[targetCurrency]) {
            throw new Error("Moeda alvo não encontrada!");
        }
        
        return data.conversion_rates[targetCurrency];
    } catch (error) {
        console.error("Erro:", error.message);
        process.exit(1);
    }
}

// Função principal
async function main() {
    console.log("=== Conversor de Moedas ===\n");

    // Solicitar ao usuário a moeda de origem, destino e valor
    const baseCurrency = prompt("Moeda Origem : ").toUpperCase();
    const targetCurrency = prompt("Moeda Destino : ").toUpperCase();
    const amount = parseFloat(prompt("Valor : "));

    if (isNaN(amount) || amount <= 0) {
        console.error("Por favor, insira um valor válido para conversão.");
        return;
    }

    console.log("\nBuscando taxas de câmbio...");
    const exchangeRate = await getExchangeRate(baseCurrency, targetCurrency);

    // Calcula o valor convertido
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    console.log(`\n${baseCurrency} ${amount.toFixed(2)} => ${targetCurrency} ${convertedAmount}.`);
    const convertedTax = (convertedAmount / amount).toFixed(6);
    console.log(`Taxa: ${convertedTax}`)
}

// Executa o programa
if (require.main === module) {
    main();
}
