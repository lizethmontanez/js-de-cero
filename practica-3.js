let frutas = [];
frutas.push("manzana");
frutas.push("manzana");
frutas.push("manzana");
frutas.push("pera");
frutas.push("pera");
frutas.push("uva");
frutas.push("uva");
frutas.push("uva");

let manzana = 0;
let pera = 0;
let uva = 0;

for(let i=0; i < frutas.length; i++){
    if(frutas[i] === "manzana"){
        manzana++;
    }
    else if(frutas[i] === "pera"){
        pera++;
    }
    else if(frutas[i] === "uva"){
        uva++;
    }
}
console.log("Cantidad de manzanas " + manzana);
console.log("Cantidad de peras " + pera);
console.log("Cantidad de uvas " + uva);