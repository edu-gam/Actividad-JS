const usuario = {
    nombre: "Maria",
    apellido: "Gómez",
    edad: 25,
}
const direccion = {
    calle: "Calle #13",
    ciudad: "Bogotá",
    pais: "Colombia"
}

function saludar() {
    return console.log("Hola soy", usuario.nombre, usuario.apellido, "tengo", usuario.edad, "años", "estoy viviendo en la", direccion.calle, "en la ciudad de", direccion.ciudad, "en el pais", direccion.pais)

}
saludar(usuario,direccion)
