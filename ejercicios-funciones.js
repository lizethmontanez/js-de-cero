//Ejercicios clase
//triangulo
function areaTriangulo(a, b) {
    let area = (b*a) / 2;
    return area;
}

//rectángulo
function areaRectangulo (a, b) {
    let area = b*a;
    return area;
}

const areaRectanguloAF = (a,b) => b*a;

//circulo
function areaCirculo(r) {
    const Pi = 3.1416
    let area = Pi * r * r;
    return area;
}

function areaCirculod(d) {
    const Pi = 3.1416
    let area = Pi * (d/2) * (d/2);
    return area;
}

//celsius a farhrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const celsiusAFahrenheitAF = (celsiusAF) => (celsiusAF * 9/5) +32;

//numero par
function parOImpar(n) {
    if (n % 2 === 0){
        return "Par"
    }
    else {
        return "Impar"
    }
}

console.log(`El área de un triángulo de base 5 y altura 6 es: ${areaTriangulo(5,6)}`);
console.log(`El área de un rectángulo de base 5 y altura 6 es: ${areaRectangulo(5,6)}`);
console.log(`El área de un cículo de radio 4: ${areaCirculo(4)}`);
console.log(`50 grados celsius  equivale a ${celsiusAFahrenheit(50)} grados Fahrenheit`);
console.log(`el número 10 es ${parOImpar(10)} mientras que el numero 11 es ${parOImpar(11)}`);


//PRACTICA 4
//declaro arreglo
let librosLeidos = [];
//declaro función de agregar libro
function agregarLibro(Titulolibro){
    librosLeidos.push(Titulolibro); //agregamos un elemento al arreglo
}

agregarLibro("El principito");
agregarLibro("Marianela");
agregarLibro("El psicoanalista");

console.log(librosLeidos);

//Mostrar los libros leídos
function mostrarLibrosLeidos(){
    for(let inicio = 0; inicio < librosLeidos.length; inicio ++){
        console.log(librosLeidos[inicio])
    }
}

//Tenemos que llamar a la función
mostrarLibrosLeidos();


console.log("...........")
agregarLibro("La cabaña");
agregarLibro("IT");
agregarLibro("JS para principiantes");

mostrarLibrosLeidos();

//Arrow function
let librosLeidosAF = [];

// Función para agregar un libro
const agregarLibro = (tituloLibro) => librosLeidosAF.push(tituloLibro);

// Agregar libros al arreglo
agregarLibro("El principito");
agregarLibro("Marianela");
agregarLibro("El psicoanalista");

console.log(librosLeidosAF);

// Función para mostrar los libros leídos
const mostrarLibrosLeidos = () => librosLeidosAF.forEach(libro => console.log(libro));

// Llamamos a la función para mostrar los libros
mostrarLibrosLeidos();