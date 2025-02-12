//bucle for es para cuando de antemano ya sé cuántas veces se va a repetir el código, también para cuando se hacen arreglos. El while se usa cuando no sabemos cuántas veces se va a repetir el código.

//****BUCLE WHILE */
let contador = 0;
while (contador < 6) {
    console.log(contador);
    contador++;
}

//practica clase
let numero =30;
let contador_b = 1;
while(contador_b <= numero){
    //código a iterar
    if(contador_b % 5 === 0){
        console.log(contador_b)
    }
    contador_b++ //incremento del contador
}


//****BUCLE FOR */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//practica clase de números impares
let num = 35;
for(let indice = 0; indice <= num; indice++){
    if(indice % 2 !== 0){
    console.log(indice);
}
}


//ejercicio lectura
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i; // Sumar el número actual a la suma total
}
console.log(suma);

//cuenta regresiva del 10 al 1
for (let r=10; r >= 1; r--){
    console.log(r)
}


//suma de pares del 1 al 20
let suma2 = 0;
for (let p=1; p<=20; p++){
    if (p%2 === 0){
        suma2 += p;
    }
}
console.log(suma2);

//QUIZZ
for (let i = 0; i < 3; i++) { 
    console.log("Hola"); 
} //3 veces


let suma3 = 0; 
for (let i = 1; i <= 5; i++) { 
    suma3 += i; 
} 
console.log(suma3); //15


//****MISMO EJERCICIO CON AMBOS BUCLES**** */
//Imprimir los numeros del 1 al 10

let ini = 0;
while(ini <=10){
    console.log(ini)
    inicio++
}

for (let ini=1; ini <= 10; ini++){
    console.log(ini)
}

