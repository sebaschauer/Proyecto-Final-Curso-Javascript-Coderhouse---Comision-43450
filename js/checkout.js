/* console.log("Su carrito contiene los siguientes productos:") */
const checkOut = JSON.parse(localStorage.getItem('productosCarrito'))
/* console.table(checkOut) */



let logoCheck = document.getElementById("logoCheck")
logoCheck.addEventListener('click',()=>{
    location.href = './index.html'
}) 


class FinalizarPedido {
    constructor (checkOut){
        this.pedido = checkOut
    }
    subtotal() {
        if ((this.pedido.length) > 0) {
            return this.pedido.reduce((acc, producto) => acc + producto.Precio,0)
        }
        /* else {
            console.warn('La propiedad "pedido" es null o no está definida.'); */
    }
}

const pedidos = new FinalizarPedido (checkOut)
/* console.table(pedidos) */
/* console.log(pedidos.subtotal()) */
let montoPedido = pedidos.subtotal()

const tituloCheckout = document.getElementById('tituloCheckout')
tituloCheckout.innerHTML = 'El monto a pagar es:'

const montoCheckout = document.getElementById('montoCheckout')
montoCheckout.innerHTML = '$' + montoPedido

const elementosCarrito = document.getElementById("elementosCarrito")
elementosCarrito.innerHTML = checkOut.length

function finalizarCompra(){
    alert('Gracias por su compra!')
    location.href = 'index.html'
    localStorage.clear()
    aviso() // NO se por que se me borra a los milisegundos, no puedo cambiarle el tiempo, ni con timer , ni con duration, el problema me parece esta en el html, o algo por el estilo, porque no me redirecciona a index!!
}

let botonAceptar = document.getElementById("botonAceptarCompra")
botonAceptar.addEventListener('click',()=>{
    finalizarCompra()
})

let botonCancelar = document.getElementById("botonCancelarCompra")
botonCancelar.addEventListener('click',()=>{
    location.href = 'index.html'
    localStorage.clear()
    
})

function aviso(){
    Swal.fire({
        title: 'Gracias por su compra!!',
        text: 'Esperamos verlo pronto.',
        imageUrl: 'img/fotoCheckout.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
}

let formulariosPago = document.getElementById('formulariosPago')

let radioTransferencia = document.getElementById('PagoTransferencia')
radioTransferencia.addEventListener('input',() => {
    formulariosPago.innerHTML = retornarFormularioTransferencia()
})

let radioDebito = document.getElementById('PagoDebito')
radioDebito.addEventListener('input',() => {
    formulariosPago.innerHTML = retornarFormularioDebito()
})

let radioTarjeta = document.getElementById('PagoTarjeta')
radioTarjeta.addEventListener('input',() => {
    formulariosPago.innerHTML = retornarFormularioTarjeta()
})


function retornarFormularioTransferencia() {
    return `<div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">Alias:</label>
                </div>
                <div>
                    <p class="parrafoPago">JAIME.TORNILLO.VACA</p>
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">CBU:</label>
                </div>
                <div>
                    <p class="parrafoPago">23850918302392-49-102</p> 
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">TItular:</label>
                </div>
                <div>
                    <p class="parrafoPago">Sebastian Schauer</p>
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">Tipo de Cuenta:</label>
                </div>
                <div>
                    <p class="parrafoPago">Cuenta Corriente</p>
                </div>
            </div>`
}

function retornarFormularioDebito() {
    return `<div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">Numero de Tarjeta:</label>
                </div>
                <div>
                    <input type="text" value="Ingrese el numero de la tarjeta" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">Nombre del TItular:</label>
                </div>
                <div>
                    <input type="text" value="Ingrese el nombre del titular de la tarjeta" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Vencimiento">Vencimiento:</label>
                </div>
                <div>
                    <input type="month" value="" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="codigo">Codigo:</label>
                </div>
                <div>
                    <input type="text" value="Ingrese codigo de seguridad" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="documento">Documento:</label>
                </div>
                <div>
                    <input type="text" name="direccion" id="" value="Ingrese su numero de documento" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="direccion">Direccion:</label>
                </div>
                <div>
                    <input type="text" name="telefono" id="" value="Ingrese su direccion" class="inputDatosPersonales">
                </div>
            </div>`
}

function retornarFormularioTarjeta() {
    return `<div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">Numero de Tarjeta:</label>
                </div>
                <div>
                    <input type="text" value="Ingrese el numero de la tarjeta" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Nombre">Nombre del TItular:</label>
                </div>
                <div>
                    <input type="text" value="Ingrese el nombre del titular de la tarjeta" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="Vencimiento">Vencimiento:</label>
                </div>
                <div>
                    <input type="month" value="" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="codigo">Codigo:</label>
                </div>
                <div>
                    <input type="text" value="Ingrese codigo de seguridad" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="documento">Documento:</label>
                </div>
                <div>
                    <input type="text" name="direccion" id="" value="Ingrese su numero de documento" class="inputDatosPersonales">
                </div>
            </div>
            <div class="contenedor2">
                <div class="contenedorLabel">
                    <label for="direccion">Direccion:</label>
                </div>
                <div>
                    <input type="text" name="telefono" id="" value="Ingrese su direccion" class="inputDatosPersonales">
                </div>
            </div>`
}