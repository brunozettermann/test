// src/funcoes.js

// Função de Adição
function adicionar(a, b) {
    return a + b;
  }
  
  // Função de Subtração
  function subtrair(a, b) {
    return a - b;
  }
  
  // Função de Multiplicação
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Função de Divisão (com tratamento de erro para divisão por zero)
  function dividir(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
  }
  
  // Exportando as funções
  module.exports = { adicionar, subtrair, multiplicar, dividir };
  