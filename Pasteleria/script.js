document.addEventListener('DOMContentLoaded' , () =>{
    //obtencion de elementos del dom por su id
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto = document.getElementById('contacto');

    //obtención de elementor del DOM por su ID del menú de navegación
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');

    //obtención de elementor del DOM por su ID para el carrito de compras
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0 //variable para almacenar el total del carrito

    //obtención de los elementos del DOM para el formulario
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    //Evento para mostrar la sección de inicio y oculatar las demás
    menuInicio.addEventListener('click', (e) => {
        e.preventDefault();
        inicio.style.display = 'block';
        productos.style.display = 'none';
        contacto.style.display = 'none';
    });

    //Evento para mostrar la sección de menú y oculatar las demás
    menuProductos.addEventListener('click', (e) => {
        e.preventDefault();
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });

    //Evento para mostrar la sección de contacto y oculatar las demás
    menuContacto.addEventListener('click', (e) => {
        e.preventDefault();
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });

    
    //evento para agregar productos al carrito
    productos.addEventListener('click', (e) =>{
        if(e.target.classList.contains('agregar-carrito')){//verifica si el click fue en el boton agregar carrito
            const nombre = e.target.dataset.nombre; //obtiene el nombre del producto

            const precio = e-parseInt(e.target.dataset.precio); //obtiene el precio del producto

            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio; //suma el precio de los productos
            console.log(total);
            actualizarTotalCarrito(); //actualiza el total del carrito
        }

        //target: es una propiedad que despliega el elemento que desencadeno
        //classlist nos permite acceder a las clases de un elemento
    });

    //ejemplo de querySelector para manipular el total del carrito
    const totalElemento = document.querySelector('#total-carrito');

    function actualizarTotalCarrito(){
        totalElemento.textContent = total;
    }

    //titulo del carrito con querySelector
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Su compra es:'

    //simular envío de formulario
    formularioContacto.addEventListener('submit', function(event){
        event.preventDefault(); //evitar el comportamiento por defecto
        formularioContacto.style.display = 'none';
        mensajeEnviado.style.display = 'block';
    });

    //ejemplo con querySelector para mostrar el precio del producto
    productos.addEventListener('mouseover', (e) =>{
        if(e.target.classList.contains('producto')){
            const precio = e.target.querySelector('.agregar-carrito').dataset.precio; //encuetra el precio dentro del producto (en el botón)
            e.target.setAtribute('title', `Precio: $${precio}`); //lo muestra como tooltip
        }
    });
});