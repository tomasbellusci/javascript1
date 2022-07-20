
let nombreUsuario
let valorProteinas = 3000
let valorQuemadores = 1700
let ValorAminoacidos = 1100


for(let i = 0; i <= 4; i++){
    
    
    let nombreUsuario = prompt(`Ingrese su nombre para registrarse por favor.`)
    alert(`bienvenido ` + nombreUsuario)

    let consultaCompra = prompt(`desea comprar proteinas, aminoacidos o quemadores ?`).toLowerCase()
    

    if(consultaCompra == `proteinas`){
        let consultaCantidadProte = parseInt(prompt(`cuantas proteinas desea añadir al carrito?`))
        alert(`Perfecto, el total de su compra es ` + consultaCantidadProte * valorProteinas + `$`)
    }

    else if(consultaCompra == `aminoacidos`){
        let consultaCantidadAminoacidos = parseInt(prompt(`cuantos aminoacidos desea añadir al carrito?`))
        alert(`Perfecto, el total de su compra es ` + calcularPrecio(consultaCantidadAminoacidos,ValorAminoacidos) + `$`)
    }

    else if (consultaCompra == `quemadores`){

        let consultaCantidadQuemadores = parseInt(prompt(`cuantos quemadores desea añadir al carrito?`))
        alert(`Perfecto, el total de su compra es ` + consultaCantidadQuemadores * valorQuemadores + `$`)
    }

    alert(nombreUsuario + ` gracias por confiar en nosotros, su numero de seguimiento del envio es ` + Math.random())


    function calcularPrecio(cantidad,precio){
        return cantidad*precio
    }

    console.log(nombreUsuario + ` cliente ` + i + `` + consultaCompra)

}




