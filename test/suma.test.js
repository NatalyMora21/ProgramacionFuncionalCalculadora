const {suma, resta} = require('../operaciones');

test('Suma ', () => {

    expect(suma(1,2)).toBe(3);
    
})


test('Resta ', () => {

    expect(resta(1,2)).toBe(-1);
    
})
