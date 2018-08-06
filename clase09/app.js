"use strict";
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var persona = {
    nombre: "Fulano"
};
saludar(persona.nombre);
