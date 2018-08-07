// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
var batman = {
    nombre: "Bruce",
    artesMarciales: ['Jujitsu', 'Ninjutsu']
};
// Convertir esta funcion a una funcion de flecha
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble(10, 20));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    return mensaje;
}
;
console.log(getAvenger("hawkeye"));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () { return (this.base * this.altura); };
    return Rectangulo;
}());
var A = new Rectangulo(5, 6);
console.log(A.calcularArea());
