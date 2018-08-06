let nombre:string = "Juan";
let apellido:string = "Garcia";
let edad:number = 30;

let texto = `Hola,
${nombre} ${apellido} (${edad})`;

function getNombre() {
    return "Mi nombre";
}

let texto2:string = `${getNombre()}`;

console.log(texto2);