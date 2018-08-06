function enviarMision(soldado) {
    console.log("Enviando a " + soldado.nombre);
}
function enviarRegreso(soldado) {
    console.log("Enviando a " + soldado.nombre + " a casa");
}
var ryan = {
    nombreClave: "Ryan",
    rango: "Cabo"
};
enviarMision(ryan);
enviarRegreso(ryan);
