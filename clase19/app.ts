interface Soldado{
    nombre:string,
    rango:string
}

function enviarMision( soldado: Soldado ){

    console.log(`Enviando a ${soldado.nombre}`);
}

function enviarRegreso( soldado: Soldado ){

    console.log(`Enviando a ${soldado.nombre} a casa`);
}

let ryan:Soldado = {
    nombre: "Ryan",
    rango: "Cabo"
};

enviarMision(ryan);
enviarRegreso(ryan);