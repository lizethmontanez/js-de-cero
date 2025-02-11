
let contador = 0;
while (contador < 6) {
    console.log(contador);
    contador++;
}


for (let i = 0; i < 10; i++) {
    console.log(i);
}
//PREGUNTAR A LA SENSEI: cuál es la diferencia entre estos dos, si ambos se detienen en un punto (el primero en el 5 y el segundo en el 9)


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

