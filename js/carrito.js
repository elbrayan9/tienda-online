$(document).ready(() => {
    mostrarCarrito();
    $('#vaciarCarrito').click(vaciarCarrito);
    $('#simularCuotas').click(simularCuotas);
    actualizarContadorCarrito();
});

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    $('#carrito').empty();
    let total = 0;
    carrito.forEach(producto => {
        $('#carrito').append(`
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                </div>
            </div>
        `);
        total += producto.precio;
    });
    $('#total').text(`$${total}`);
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
    actualizarContadorCarrito();
    Swal.fire({
        title: 'Carrito vaciado',
        text: 'El carrito ha sido vaciado',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    $('#contadorCarrito').text(carrito.length);
}
