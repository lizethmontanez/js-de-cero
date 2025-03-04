document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    const comentarioInput = document.getElementById('comentario');
    const agregarButton = document.getElementById('agregar');
    const listaComentarios = document.getElementById('lista-de-comentarios');
    const removerButton = document.getElementById('remover-comentario'); 

    let comentarios = [];

    agregarButton.addEventListener('click', function () {
        agregarComentario(comentarios, comentarioInput, listaComentarios);
    });

    removerButton.addEventListener('click', function () {
        removerComentario(listaComentarios);
    });
}

function agregarComentario(comentarios, comentarioInput, listaComentarios) {
    const comentarioHecho = comentarioInput.value.trim();
    if (comentarioHecho) {
        const fechaActual = new Date();  // Obtiene la fecha y hora actual
        const nuevoComentario = {
            nombre: comentarioHecho,
            fecha: fechaActual.toLocaleString() // Formatea la fecha y hora
        };

        comentarios.push(nuevoComentario);

        const li = document.createElement('li');
        li.textContent = `${nuevoComentario.nombre} - ${nuevoComentario.fecha}`;         
        listaComentarios.appendChild(li);

        comentarioInput.value = '';
    }
}

function removerComentario(listaComentarios) {
    const ultimoComentario = listaComentarios.lastElementChild; // Obtiene el último <li>
    if (ultimoComentario) {
        listaComentarios.removeChild(ultimoComentario); // Lo elimina de la lista
    }
}