function simularCuotas() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    let cuotas = parseInt($('#cuotas').val());

    if (isNaN(cuotas) || cuotas <= 0) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor ingrese una cantidad de cuotas válida',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    let cuotaMensual = total / cuotas;
    $('#simulacionCuotas').html(`Total a pagar: $${total} en ${cuotas} cuotas de $${cuotaMensual.toFixed(2)} cada una`);
}
