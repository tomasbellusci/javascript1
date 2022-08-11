class Producto {
    constructor(nombre,marca,precio,stock,img){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
        this.img = img
    }
}

let testosterona = new Producto (`Testosterona`, `Roid plus`, 7500,120, `../img/testo_propionato.jpg`)
let estanozolol = new Producto (`Estanozolol`, `Roid plus`, 5000, 150,`../img/stano_jpeg.jpg`)
let trembolona = new Producto (`Trembolona`, `Roid plus`, 8800, 110, `../img/trembo_jpeg.jpg`)
let boldenona = new Producto (`Boldenona`, `Roid plus`, 7000, 130, `../img/bolde_roid.jpg`)

let catalogo = [testosterona, estanozolol, trembolona,boldenona]
let carritoDeCompras = []

if(localStorage.getItem(`carritoDeCompras`)){
    carrito = JSON.parse(localStorage.getItem(`carritoDeCompras`))
}else{
    localStorage.setItem(`carrito`, JSON.stringify(`carritoDeCompras`))
}





let contenedor = document.querySelector(`#contenedor`)

// uso html dinamico para generar los productos
function imprimirProductos (){ catalogo.forEach((Producto,indice) => {
    contenedor.innerHTML += `
    <div class="carta" id="Producto${indice}">
            <img src="${Producto.img}" alt="" class="img_productos">
            <h5 class="cartaTitulo">${Producto.nombre}</h5>
            <p class="cartaMarca">Marca: ${Producto.marca}</p>
            <p class="cartaPrecio">$ ${Producto.precio}</p>
            <button class="boton_carta" id="botonCarrito${indice}">Añadir al carrito</button>
    </div>
    `
})
}
imprimirProductos()




let domCarrito = document.querySelector(`#carrito`)
let domContenedorPrecios = document.querySelector(`#contenedorPrecios`)


//recorro el array y le digo al boton que envie el producto al carrito
function añadirAlCarrito () { catalogo.forEach((producto, indice) => {
    document.querySelector(`#botonCarrito${indice}`).addEventListener(`click`, () => {
        carritoDeCompras.push(catalogo[indice])
        console.log(carritoDeCompras)
        domCarrito.innerHTML += 
        `<div class="cartaCarrito" id="producto${indice}">
            <div class="boxObjetoCarta">
                <img src="${catalogo[indice].img}" alt="" class="imgDeCarrito">
            </div>
            <div class="boxObjetoCarta">
                <p class="nombreProdCarrito">${producto.nombre}</p>
            </div>
            <div class="boxObjetoCarta">
                <p class="marcaProdCarrito">${producto.marca}</p>
            </div>
            <div class="boxObjetoCarta">
                <p class="precioProdCarrito">$${producto.precio}</p>
            </div>
            <div class="boxObjetoCarta">
                <button class="botonEliminar" id="botonEliminar${indice}">Eliminar</button>
            </div>
        </div>`

        Toastify({
            text: ` Añadiste ${producto.nombre} al carrito`,
            duration: 5000,
            newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#EFEFEF",
                color:"#000000",
            },
            onClick: function(){} // Callback after click
            }).showToast();
        })
    })
}
añadirAlCarrito()


