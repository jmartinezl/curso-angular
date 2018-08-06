"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "algo"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo el " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo el " + objeto;
    }
    console.log(mensaje);
}
activar("Luis", "Lampara", "mañana");
