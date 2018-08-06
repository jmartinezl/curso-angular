interface Soldado{
    nombre:string,
    rango:string
}

class Agente {

    nombre:string = undefined;
    apodo:string = undefined;
    rango:string = undefined;

    estaDisponible:boolean = false;
    noCombates:number = 0;

    constructor(nombre:string,apodo:string,rango:string){
        this.nombre = nombre;
        this.apodo = apodo;
        this.rango = rango;
    }
}

let ryan:Agente = new Agente("ryan","veloz","soldado razo");
console.log(ryan);