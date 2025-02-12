//primer característica de los array es que están en []
// Array de frutas 
let frutas = ['manzana', 'plátano', 'naranja']; 

console.log(frutas[2]); // Salida: "naranja"

//Modificar elemento
frutas[1] = 'pera'; 
console.log(frutas);

//Añadir elementos al FINAL 
frutas.push('kiwi');
console.log(frutas); 

//Añadir elementos al INICIO
frutas.unshift('cereza');
console.log(frutas);

//Eliminar elemento del final
frutas.pop();
console.log(frutas); 

//Eliminar el primer elemento
frutas.shift();
console.log(frutas); 

console.log(frutas.length); // Salida: 3
console.log(frutas[frutas.length - 1]); // Salida: "'naranja'"


// Iterar el array: imprime cada fruta
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


//EJERCICIO LECTURA
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

//Imprimir el Segundo Color
console.log(colores[1]);

//Modificar el Tercer Color
colores[2]='gris'
console.log(colores);

//Añadir un Nuevo Color al final
colores.push('negro')
console.log(colores);

//Eliminar el Primer Color
colores.shift()
console.log(colores);


//EJERCICIO CLASE

let verduras = ['papa', 'chayote', 'lechuga', 'chile', 'espinaca', 'jitomate']; 
console.log("Imprimiendo verduras de ciclo for")

for(let indice = 0; indice < verduras.length; indice++){
    console.log(verduras[indice])
}

console.log("metodos de arreglos");
let personas=[];

personas.push('Ana'); //agregar
personas.push('Diego');
personas.push('Lizeth');
personas.push('Marcela');
console.log(personas);

personas.pop(); //quitar última persona
console.log(personas);

personas.unshift('Alex'); //agregar al inicio del arreglo
personas.unshift('Yolanda');
console.log(personas);

personas.shift();
console.log(personas);