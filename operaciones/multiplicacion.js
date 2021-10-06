
const {asignarSigno, validarNumeros} = require ('./auxiliares');

const suma =  require('./suma');
const resta =  require('./resta');

const multiplicacionOperacion = (num1, num2) => {
    
    const resultado = num2 == 1 || num2 == -1 ? num1 : suma(num1, multiplicacionOperacion(num1,resta(num2,1)));
    return resultado;
}


const multiplicacion = (num1, num2) => {

    const {newnum1,newnum2} = validarNumeros(num1, num2);
    const resultado = multiplicacionOperacion (newnum1,newnum2);
    return asignarSigno(num1, num2, resultado);

}

module.exports = multiplicacion;