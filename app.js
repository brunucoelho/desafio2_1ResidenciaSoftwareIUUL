const prompt = require('prompt-sync')();
const getExchangeRate = require('./exchangeRate'); // Importa a função

async function main() {
    console.log("=== Conversor de Moedas ===\n");

    while (true) {
        // Solicitar moeda de origem
        const baseCurrency = prompt("Moeda Origem : ").toUpperCase();
        if (baseCurrency === "") {
            console.log("Programa encerrado.");
            break;
        }

        if (baseCurrency.length !== 3) {
            console.error("\nA moeda de origem deve ter exatamente 3 caracteres.");
            continue;
        }

        // Solicitar moeda de destino
        const targetCurrency = prompt("Moeda Destino: ").toUpperCase();

        if (targetCurrency.length !== 3) {
            console.error("A moeda de destino deve ter exatamente 3 caracteres.");
            continue;
        }

        if (baseCurrency === targetCurrency) {
            console.error("A moeda de origem não pode ser igual à moeda de destino. Tente novamente.");
            continue;
        }

        // Solicitar valor a ser convertido
        const amount = parseFloat(prompt("Valor : "));

        if (isNaN(amount) || amount <= 0) {
            console.error("O valor deve ser maior que zero. Tente novamente.");
            continue;
        }

        try {
            console.log("\nBuscando taxas de câmbio...");
            const exchangeRate = await getExchangeRate(baseCurrency, targetCurrency);

            // Calcula e exibe o valor convertido e a taxa
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            console.log(`\n${baseCurrency} ${amount.toFixed(2)} => ${targetCurrency} ${convertedAmount}`);
            console.log(`Taxa : ${exchangeRate.toFixed(6)}`);
        } catch (error) {
            console.error(`Erro: ${error.message}`);
        }

        console.log("\n---\n");
    }
}

// Executa o programa
if (require.main === module) {
    main();
}
