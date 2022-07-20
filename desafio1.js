function Producto (nombre, precio,stock){
    this.nombre = nombre
    this.precio = precio 
    this.stock = stock
}

const monitor = new Producto (`monitor`, 15000, 20)
const parlantes = new Producto (`parlantes`, 7300, 25)
const teclado = new Producto (`teclado`, 2350, 18)


let nombreUsuario
let ConsultaCompra 




function totalCompra (cantidad,precio){
    return cantidad * precio * 1.21
}



for(let i = 1; i <= 3; i++){

nombreUsuario = prompt(`Ingrese un nombre para ser registrado`).toLowerCase()
alert (`bienvenido ` + nombreUsuario)

ConsultaCompra = prompt(`desea agregar al carrito\n -monitor\n -parlantes\n -teclado `).toLowerCase()

if(ConsultaCompra == `monitor`){
    
    let cantidadMonitor = parseInt(prompt(`cuantos monitores desea agregar al carrito?`))

    if(cantidadMonitor <= monitor.stock){
        alert(`Perfecto, el total de su compra es $` + totalCompra(cantidadMonitor, monitor.precio) + ` con IVA incluido.`)
    }else{
        alert(`No contamos con esa cantidad de stock, el stock es de ` + monitor.stock)
    }

}

else if(ConsultaCompra == `parlantes`){
    
    let cantidadParlantes = parseInt(prompt(`cuantos parlantes desea agregar al carrito?`))

    if(cantidadParlantes <= parlantes.stock){
        alert(`Perfecto, el total de su compra es $` + totalCompra(cantidadParlantes, parlantes.precio) + ` con IVA incluido.`)
    }else{
        alert(`No contamos con esa cantidad de stock, el stock es de ` + parlantes.stock)
    }
}


else if(ConsultaCompra == `teclado`){
    
    let cantidadTeclado = parseInt(prompt(`cuantos teclados desea agregar al carrito?`))

    if(cantidadTeclado <= teclado.stock){
        alert(`Perfecto, el total de su compra es $` + totalCompra(cantidadTeclado, teclado.precio) + ` con IVA incluido.`)
    }else{
        alert(`No contamos con esa cantidad de stock, el stock es de ` + teclado.stock)
    }
}else{
    alert(`ese producto no esta en la tienda.`)
}


}



