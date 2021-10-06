const division = require('../operaciones/division.js');

test('Division ', () => {
    
    expect(division(1,2)).toBe(0);
    expect(division(2,0)).toBe("No es posible dividir por 0")

})