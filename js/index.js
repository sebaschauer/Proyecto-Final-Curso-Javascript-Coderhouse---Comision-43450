
function retornoTarjetaHTML(cerv) {
    return  `<div class="tarjetaProducto col-md-3 p-3 container-fluid">
                <div class="imagen">
                    <img id="imgProducto" src=${cerv.Imagen} alt="" width="200px" height="200px">
                </div>
                <div class="nombre">
                    <h3 id="nombreProducto">${cerv.Nombre}</h3>
                </div>
                <div class="precio">
                    <p id="precioProducto">$${cerv.Precio}</p>
                </div>
                <div class="botonAgregarCarrito">
                    <button class="button button-outline botonAgregarCarrito" id="${cerv.Codigo}">Agregar al Carrito</button>
                </div>
            </div>`
}

let galeria = document.getElementById("galeriaProductos")

function cargarProductos() {
    cervezas.forEach((cerv)=> {
        galeria.innerHTML += retornoTarjetaHTML(cerv)
    })
    agregarProducto()
}

document.getElementById("elemCarrito").innerHTML = carrito.length; 

function agregarProducto(){
    const botonesAgregar = document.querySelectorAll('button.button.button-outline')
        for (let boton of botonesAgregar) {
            boton.addEventListener('click',(e) =>{
            const productoElegido = cervezas.find((cerveza)=>cerveza.Codigo === parseInt(e.target.id))
            carrito.push(productoElegido)
            console.log(`El usuario agrego el producto ${productoElegido.Nombre} al carrito`)
            console.log("Su carrito contiene los siguientes productos:")
            console.table(carrito)
            localStorage.setItem('productosCarrito', JSON.stringify(carrito))
            document.getElementById("elemCarrito").innerHTML = carrito.length;
            aviso(productoElegido.Nombre)
            })
        }
    }


let imgLogo = document.getElementById("logo")
imgLogo.addEventListener('click',()=>{
    location.href = 'index.html'
})

function aviso(cerveza){
            Toastify({
                text: `Se agrego ${cerveza} al carrito `,
                gravity:"top",
                position:"right",
                duration: 1500,
                style:{
                    background: "white",
                    color:"black"
                }
                }).showToast();
}

cargarProductos()



async function cargarProductosServidor() {
    const response = await fetch(URL)
    const datos = await response.json()
    cervezas.push(...datos)
    cargarProductos()


    try {
        
    } catch (error) {
        console.log('Error al cargar los datos', error)
    }
}

/* cargarProductosServidor() */