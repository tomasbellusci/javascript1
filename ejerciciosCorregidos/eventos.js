class Usuario {
    constructor (nombre, apellido, email, contraseña){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.contraseña = contraseña
    }
}

let usuarios = []

let formulario = document.getElementById("id_form")

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("enviaste formulario bro")
    let nombre = document.getElementById("id_nombre").value
    let apellido = document.getElementById("id_apellido").value
    let email = document.getElementById("id_email").value
    let contraseña = document.getElementById("id_contraseña").value

    const usuario1 = new Usuario(nombre,apellido,email,contraseña)
    usuarios.push(usuario1)
    formulario.reset()
    console.log(usuarios)
})
