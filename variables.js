var nombre = "Lizeth"
var nombre = "Liz"

//Let no permite declarar variables,lo que significa que no puedes declarar la misma variable dos veces
//Let tiene un scope de bloque, lo que significa que sólo vive en el bloque donde fue declarada
let apellido1 ="Montanez";
let apellido2 ="Cervantes";

//Se puede reasignar el valor de la variable así:, sin embargo el nombre de la variable no se cambia
apellido1 = "Perez";
console.log(apellido1);

//cons es una constante, no se puede reasignar el valor
const PI = 3.1416

PI = 4; //Esto no se puede hacer porque PI ya se le declaró valor
