//const fetch = require('node-fetch'); // Importa fetch caso necessário

// Base URL da API
const API_KEY = require('./apiKey'); // Importa a chave da API
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

// Exporta a função para uso em outros arquivos
module.exports = getExchangeRate;
