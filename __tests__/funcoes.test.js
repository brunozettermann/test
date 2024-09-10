// __tests__/funcoes.test.js

const { adicionar, subtrair, multiplicar, dividir } = require('../src/funcoes');

test('adicionar dois números', () => {
  expect(adicionar(2, 3)).toBe(5);
  expect(adicionar(-1, 1)).toBe(0);
});

test('subtrair dois números', () => {
  expect(subtrair(5, 3)).toBe(2);
  expect(subtrair(0, 3)).toBe(-3);
});

test('multiplicar dois números', () => {
  expect(multiplicar(2, 3)).toBe(6);
  expect(multiplicar(-2, 3)).toBe(-6);
});

test('dividir dois números', () => {
  expect(dividir(6, 3)).toBe(2);
});

test('dividir por zero deve lançar erro', () => {
  expect(() => dividir(6, 0)).toThrow('Divisão por zero não é permitida');
});
