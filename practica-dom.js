document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    const comentarioInput = document.getElementById('comentario');
    const agregarButton = document.getElementById('agregar');
    const listaComentarios = document.getElementById('lista-de-comentarios');

    let comentarios = [];

    agregarButton.addEventListener('click', function () {
        agregarComentario(comentarios, comentarioInput, listaComentarios);
    });
}

function agregarComentario(comentarios, comentarioInput, listaComentarios) {
    const comentarioHecho = comentarioInput.value.trim();
    if (comentarioHecho) {
        const nuevoComentario = {
            nombre: comentarioHecho
        };

        comentarios.push(nuevoComentario);

        const li = document.createElement('li');
        li.textContent = nuevoComentario.nombre;
        listaComentarios.appendChild(li);

        comentarioInput.value = '';
    }
}