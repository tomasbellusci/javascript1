function Producto (nombre, precio,stock,img){
    this.nombre = nombre
    this.precio = precio 
    this.stock = stock
    this.img = img
}

const monitor = new Producto (`monitor`, 15000, 20,`img/monitor1.jfif`)
const parlantes = new Producto (`parlantes`, 7300, 25,`img/JBL_BOOMBOX.png`)
const teclado = new Producto (`teclado`, 2350, 18,`img/teclado.png`)


let catalogo = [monitor,parlantes,teclado]
let carritoDeCompras = []


let contenedorProductos = document.querySelector(`#contenedorProductos`)

let cantidad

catalogo.forEach(  (Producto,indice) =>{
    
    if(Producto.stock > 0){
    contenedorProductos.innerHTML += `
        <div class="carta" id="Producto${indice}">
            <img src="${Producto.img}" alt="" class="img_productos">
            <h5 class="cartaTitulo">${Producto.nombre}</h5>
            <p class="cartaPrecio">$ ${Producto.precio}</p>
            <button class="boton_carta" id="botonCarrito${indice}">Añadir al carrito</button>
        </div>
    `
    }
    
})


let addbuttom = document.getElementById ("botonCarrito")

addbuttom.addEventListener("click", addToDoItem)

function addToDoItem() {
    
}


