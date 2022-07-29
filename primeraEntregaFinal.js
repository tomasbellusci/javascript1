function Producto (nombre, precio,stock,cantidad){
    this.nombre = nombre
    this.precio = precio 
    this.stock = stock
    this.cantidad = cantidad
}

const monitor = new Producto (`monitor`, 15000, 20,)
const parlantes = new Producto (`parlantes`, 7300, 25,)
const teclado = new Producto (`teclado`, 2350, 18,)


let nombreUsuario
let ConsultaCompra 




function totalCompra (cantidad,precio){
    return cantidad * precio * 1.21
}

let carritoDeCompras = []




let cantidadMonitor
let cantidadParlantes
let cantidadTeclado


for(let i = 1; i <= 3; i++){

nombreUsuario = prompt(`Ingrese un nombre para ser registrado`).toLowerCase()
alert (`bienvenido ` + nombreUsuario)

ConsultaCompra = prompt(`desea agregar al carrito\n -monitor\n -parlantes\n -teclado `).toLowerCase()

if(ConsultaCompra == `monitor`){

    carritoDeCompras.push(monitor)
    cantidadMonitor = parseInt(prompt(`cuantos monitores desea agregar al carrito?`))

    if(cantidadMonitor >= 1 && cantidadMonitor <= monitor.stock ){
        monitor.cantidad = cantidadMonitor
        alert(`el total de su compra es $` + totalCompra(monitor.cantidad, monitor.precio))
        console.log(carritoDeCompras)
    }else{
        alert(`no contamos con ese stock o no ingreso una cantidad correcta.`)
    }
} else if (ConsultaCompra == `parlantes`){
    carritoDeCompras.push(parlantes)
    cantidadParlantes = parseInt(prompt(`cuantos parlantes desea agregar al carrito?`))

    if(cantidadParlantes >= 1 && cantidadParlantes <= parlantes.stock ){
        parlantes.cantidad = cantidadParlantes
        alert(`el total de su compra es $` + totalCompra(parlantes.cantidad, parlantes.precio))
        console.log(carritoDeCompras)
    }else{
        alert(`no contamos con ese stock o no ingreso una cantidad correcta.`)
    }

}else if (ConsultaCompra == `teclado`){

    carritoDeCompras.push(teclado)
    cantidadTeclado = parseInt(prompt(`cuantos teclados desea agregar al carrito?`))

    if(cantidadTeclado >= 1 && cantidadTeclado <= teclado.stock ){
        teclado.cantidad = cantidadTeclado
        alert(`el total de su compra es $` + totalCompra(teclado.cantidad, teclado.precio))
        console.log(carritoDeCompras)
    }else{
        alert(`no contamos con ese stock o no ingreso una cantidad correcta.`)
    }

}else{
    alert(`Ingrese un producto valido por favor.`)
}

}

