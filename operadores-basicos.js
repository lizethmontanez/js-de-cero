let valor_1 = 27;
let valor_2 = 4;

let suma = valor_1+valor_2;
console.log(suma);

let resta = valor_1 - valor_2;
console.log(resta);

let multiplicacion = valor_1 * valor_2;
console.log(multiplicacion);

let division = valor_1 / valor_2;
console.log(division);

let modulo = valor_1 % valor_2;
console.log(modulo);

let exponencial = valor_1 ** valor_2;
console.log(exponencial);

//Operadores de comparación
let numero_1 = 3;
let numero_2 = "3";

console.log(numero_1 == numero_2); //comparación débil

console.log(numero_1 === numero_2); //Comparación estricta

console.log("Operadores logicos y de comparacion:");

console.log(10 > 4);
console.log(2 < 1);
console.log(10 >= 10);
console.log(10 <= 10);
//la respuesta es un valor booleano true or false

console.log("Diferente de:");
console.log(15 != 15); //false, porque es el mismo valor

console.log("AND: &&");
//para poder entrar al antro
let edad = 16;
let tenerID = true;
console.log(edad >= 18 && tenerID); // true, porque ambas condiciones son verdaderas

console.log("OR: ||");
//Para estudiar programación
let esMayorDeEdad = false;
let esEstudiante = true;
console.log(esMayorDeEdad || esEstudiante); // true, porque una condición es verdadera

console.log("NOT: !");
let esFinDeSemana = true;
console.log(!esFinDeSemana); // false, porque invierte el valor

let calificacion1 = 9;
let calificacion2 = 10;
let calificacion3 = 3;
let calificacion4 = 7;
let calificacion5 = 8;
// += nos permite una suma acumulativa promedio = promedio + calificacion1