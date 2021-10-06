

const asignarSigno = (num1, num2, resultado) => {
    
    const resultadofinal = Math.sign(num1) == Math.sign(num2) ? resultado : -resultado;

    return resultadofinal;
}

const ispositivo = num => num < 0 ? num* -1: num ;

const validarNumeros = (num1, num2) => {

    const newnum1 = ispositivo(num1);
    const newnum2 = ispositivo(num2);

    const numeroPositivos = {newnum1,newnum2}

    return numeroPositivos;
}

module.exports = {asignarSigno, validarNumeros}