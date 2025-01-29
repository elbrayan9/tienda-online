const productos = [];

$(document).ready(() => {
    $.getJSON('data/productos.json', (data) => {
        data.forEach(item => {
            const producto = new Producto(item.id, item.nombre, item.precio, item.imagen);
            productos.push(producto);
            $('#productos').append(`
                <div class="col-md-4">
                    <div class="card">
                        <img src="assets/images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$${producto.precio}</p>
                            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            `);
        });
        actualizarContadorCarrito();
    });
});

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
        Swal.fire({
            title: 'Producto agregado',
            text: `${producto.nombre} ha sido agregado al carrito`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    $('#contadorCarrito').text(carrito.length);
}
