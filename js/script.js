const usuario = {
    nombre: "Manuel",
    apellido: "Ortega",
    edad: 23,
}
const direccion = {
    calle: "Calle #13",
    ciudad: "Cartagena",
    pais: "Colombia"
}

function saludar() {
    return console.log("Hola soy", usuario.nombre, usuario.apellido, "tengo", usuario.edad, "años", "estoy viviendo en la", direccion.calle, "en la ciudad de", direccion.ciudad, "en el pais", direccion.pais)

}
saludar(usuario,direccion)
