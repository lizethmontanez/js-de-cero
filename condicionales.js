//Tipo de mascotas = gato, perro, hamster

//Condicionales (jaula mediana, jaula grande, jaula pequeña)

let tipoDeMascota = "perro";
if (tipoDeMascota === "perro"){
    console.log("Si tienes un perro, necesitas la jaula grande.")
}else if (tipoDeMascota === "gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana.")
}else{
    console.log("Si tienes un hamster, necesitas la jaula pequeña.")
}

//semáforo
let colorSemaforo = "rojo";
if (colorSemaforo === "rojo"){
    console.log("Alto")
}else if (colorSemaforo === "amarillo"){
    console.log("Detente")
}else if (colorSemaforo === "verde"){
    console.log("Siga")
};


//calificación
let creditos = 9;
let promedio = 8.5; //mínimo 8.5

if(creditos >=10 && promedio >=8.5){
    console.log("Tienes derecho a una beca")
}else if(creditos <10 && promedio >=8.5){
    console.log("Te hacen falta créditos")
}else if(creditos >=10 && promedio <8.5){
    console.log("Tu promedio debe subir")
}else{
    console.log("No tienes derecho a una beca")
}