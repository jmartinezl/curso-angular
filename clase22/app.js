var Agente = /** @class */ (function () {
    function Agente(nombre, apodo, rango) {
        this.nombre = undefined;
        this.apodo = undefined;
        this.rango = undefined;
        this.estaDisponible = false;
        this.noCombates = 0;
        this.nombre = nombre;
        this.apodo = apodo;
        this.rango = rango;
    }
    return Agente;
}());
var ryan = new Agente("ryan", "veloz", "soldado razo");
console.log(ryan);
