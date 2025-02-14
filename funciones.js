function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludar("Juan"); // Imprime: Hola, Juan!

//Valores de retorno
function sumar(a, b) {
    return a + b; // Devuelve la suma de a y b
}
let resultado = sumar(3, 5);
console.log(resultado); // Imprime: 8

//VARIABLES 
let x = 10; // Variable global porque está declarafa fuera de la función

function mostrarX() {
    let y = 5; // Variable local porque está declarada dentro de la función
    console.log("X es: " + x); // Accede a la variable global
    console.log("Y es: " + y); // Accede a la variable local
}
mostrarX();
// si hiciéramos console.log(y); nos daría: "Error: y is not defined"

//FUNCIONES ANÓNIMAS
const saludar_2 = function(nombre) {
    console.log("Hola, " + nombre + "!");
};
saludar_2("María"); // Imprime: Hola, María!

//EJEMPLO CALCULADORA SIMPLE
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Llamadas a las funciones
console.log("Suma: " + sumar(5, 3));
console.log("Resta: " + restar(5, 3));
console.log("Multiplicación: " + multiplicar(5, 3));
console.log("División: " + dividir(5, 0));


//EJEMPLO CONVERSOR DE TEMPERATURAS
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Llamadas a las funciones
console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));
console.log("68°F en Celsius es: " + fahrenheitACelsius(68));

//EJERCICIOS CLASE

let resultadoo = sumarr(10,10);
console.log(resultadoo); //sirve para guardar la variable resultado que predetermina los valores 10,10
console.log(sumar(12,20));

//return permite guardar el resultado en una variable para poder utilizarla posteriormente, a diferencia de usar el console.log
function restarr(a, b){
    let total = a - b;
    console.log(total);
}

function sumarr(n1, n2){
    let total = n1 + n2;
    return total;
}

function casita(){
    let nombre = "Lizeth";
    let apellido = "Montanez";
    console.log("Esta es una casita");
}

casita();
//console.log(nombre); //no se puede acceder porque la variable está dentro de una función

let nombre = "Lizeth";
let edad = 25
let ciudad = "Aguascalientes";
console.log("Ella se llama" + nombre + "tiene" + edad + "años y vive en" + ciudad);
console.log(`Ella se llama ${nombre} tiene ${edad} años y vive en ${ciudad}`)// ctrl + alt +}

//pedir datos al usuario
let gatos = prompt("¿cuántos gatos tienes?");
let perros = prompt("¿cuántos perros tienes?");
let usuario = prompt("¿cómo te llamas");
let mascotas = parseInt(gatos) + parseInt(perros); //convertir string a numero
//ver los datos en consola
console.log(`Se llama ${usuario}, tiene ${gatos} gatos y ${perros} perros, en total tiene ${mascotas} mascotas`);
//ver los datos en pop up
alert(`Se llama ${usuario}, tiene ${gatos} gatos y ${perros} perros, en total tiene ${mascotas} mascotas`);
//vemos los datos en la página
document.write(`Se llama ${usuario}, tiene ${gatos} gatos y ${perros} perros, en total tiene ${mascotas} mascotas`);
//en total tiene x mascotas

