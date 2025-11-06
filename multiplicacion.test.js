const { multiplicacion } = require('./math');

test('multiplicacion de 2 * 3 debe ser 6', () => {
    expect(multiplicacion(2, 3)).toBe(6);
});