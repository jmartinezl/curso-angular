let nombre = "Pedro";

let boxeador = {
    nombre: "Luis",
    golpear(){
        setTimeout ( () => console.log (this.nombre + " golpea"),1500);
    }
}

boxeador.golpear();

