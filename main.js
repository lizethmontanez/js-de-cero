function cambiarTexto(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola, desde el DOM";

}

function cambiarColor(){
    let parrafos = document.getElementsByClassName("texto");
    for (let i=0; i<parrafos.length; i++){
        parrafos[i].style.color = "blue"
    }
}
/*Selecciona todos los elementos con la clase texto, y luego usamos un bucle para cambiar de color todos los párrafos seleccionados */

function ocultarParrafo(){
    let segundoParrafo = document.getElementsByTagName("p")[4];
    segundoParrafo.style.display = "none";
}
/**Seleccionamos todos los elementos p y después indicamos mediante el índice cuál tomaremos */

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector("div p")
    parrafoDiv.textContent = "Texto cambiado dentro del div";
}
/**Selecciona el primer párrafo que se encuentra dentro del div */

function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach (item => {
        item.style.backgroundColor="yellow";
    })
}