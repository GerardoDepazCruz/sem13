const { multiplicacion } = require('./multiplicacion');

test('multiplicacion de 2 * 3 debe ser 6', () => {
  expect(multiplicacion(2, 3)).toBe(6);
});