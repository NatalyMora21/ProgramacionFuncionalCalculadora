
const {asignarSigno, validarNumeros} = require ('./auxiliares');
const suma =  require('./suma')
const resta =  require('./resta')

const divisionOperacion = (num1, num2, cociente=0 ) => {

    const resultado = num1 < 0 ?  resta(cociente,1) : divisionOperacion(resta(num1,num2),num2, suma(cociente,1))
    return resultado;
    
}

const division = (num1, num2) => {
    if (num2 == 0) return "No es posible dividir por 0"
    const {newnum1,newnum2} = validarNumeros(num1, num2);
    const resultado = divisionOperacion(newnum1, newnum2);
    return asignarSigno(num1, num2,resultado)

}


module.exports = division;