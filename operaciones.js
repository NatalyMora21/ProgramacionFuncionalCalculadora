const suma = (num1, num2) => num1 + num2;

const resta = (num1, num2) => num1 - num2;


const multiplicacion = (num1, num2 ) => {

    const resultado = num2 == 1 || num2 == -1 ? num1 : suma(num1, multiplicacion(num1,resta(num2,1)));
    return resultado;
}


const ispositivo = (num) => num < 0 ? num* -1: num ;


const multiplicacionGeneral = (num1, num2) => {

    const newnum1 = ispositivo(num1);
    const newnum2 = ispositivo(num2);

    const resultado = multiplicacion (newnum1,newnum2);

    const resultadofinal = Math.sign(num1) == Math.sign(num2) ? resultado : -resultado;

    return resultadofinal

}


console.log(multiplicacionGeneral (1, 1)+"---");