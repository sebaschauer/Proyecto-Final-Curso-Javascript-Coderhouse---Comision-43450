let logoCarrito = document.getElementById("logoCarrito")
logoCarrito.addEventListener('click',()=>{
    location.href = './index.html'
})

console.log("Su carrito contiene los siguientes productos:")
const produCanasta = JSON.parse(localStorage.getItem('productosCarrito'))
console.table(produCanasta)


const tbody = document.querySelector('tbody')

function retornarTablaProdCarrito(produCanasta){
    return `<tr id="fila">
                <td>${produCanasta.Nombre}</td>
                <td>$${produCanasta.Precio}</td>
                <td class="cantidadProducto">1</td>
                <td><button class="button button-outline botonQuitarCarrito" id="${produCanasta.Codigo}">Quitar</button></td>
            </tr>`
}

if (produCanasta.length>0) {
    produCanasta.forEach((producto) => {
        tbody.innerHTML += retornarTablaProdCarrito(producto)
    });
} 

class Compra {
    constructor (produCanasta){
        this.canasta = produCanasta
    }
    subtotal() {
        if (this.canasta.length >0){
            return this.canasta.reduce((acc, producto) => acc + producto.Precio,0)
        }
    }
}

const compras = new Compra (produCanasta)
console.log(compras.subtotal())
let montoApagar = compras.subtotal()

function quitarProducto(){
    const botonesQuitar = document.querySelectorAll('button.button.button-outline.botonQuitarCarrito')
        for (let boton of botonesQuitar) {
            boton.addEventListener('click',(e) =>{
            const productoQuitar = produCanasta.find((cerveza)=>cerveza.Codigo === parseInt(e.target.id))
            let indice = produCanasta.indexOf(productoQuitar)
            produCanasta.splice(indice,1)
            console.log(`Ud. removio el producto ${productoQuitar.Nombre} del carrito`)
            console.table(produCanasta)
            const trEliminar = boton.parentNode.parentNode 
            trEliminar.remove()
            retornarTablaProdCarrito(produCanasta)
            const compras = new Compra (produCanasta)
            console.log(compras)
            console.log('probando probando')
            
            console.table(produCanasta)

            localStorage.setItem('productosCarrito', JSON.stringify(produCanasta))
            console.log(compras.subtotal())
            let montoApagar = compras.subtotal()
            document.getElementById("precioTotal").innerHTML = montoApagar;
            document.getElementById("elemCarrito").innerHTML = produCanasta.length;
            document.getElementById("numeroProductosCarrito").innerHTML = produCanasta.length;
            aviso2(productoQuitar.Nombre)
        })
    } 
}

quitarProducto()


document.getElementById("precioTotal").innerHTML = montoApagar;

document.getElementById("elemCarrito").innerHTML = produCanasta.length;

document.getElementById("numeroProductosCarrito").innerHTML = produCanasta.length;




function aviso2(cerveza){
    Toastify({
        text: `Se Elimino ${cerveza} del carrito `,
        gravity:"top",
        position:"right",
        timer: 1500,
        style:{
            background: "white",
            color:"black"
        }
        }).showToast();
}

const botonVaciarCarrito = document.getElementById("vaciarCarrito")
botonVaciarCarrito.addEventListener('click',()=>{
    localStorage.clear()
    location.href = './index.html'
})

const botonSeguirComprando = document.getElementById("botonSeguirComprando")
    botonSeguirComprando.addEventListener('click',()=>{
    location.href = './index.html'
})

const botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
botonFinalizarCompra.addEventListener('click',()=>{
    location.href = './checkOut.html'
})

