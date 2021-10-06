const multiplicacion = require('../operaciones/multiplicacion.js');

test('Multiplicacion ', () => {
    
    expect(multiplicacion(1,2)).toBe(2);
    expect(multiplicacion(-1,2)).toBe(-2);

})