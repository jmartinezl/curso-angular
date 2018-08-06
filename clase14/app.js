"use strict";
var nombre = "Juan";
var apellido = "Garcia";
var edad = 30;
var texto = "Hola,\n" + nombre + " " + apellido + " (" + edad + ")";
function getNombre() {
    return "Mi nombre";
}
var texto2 = "" + getNombre();
console.log(texto2);
