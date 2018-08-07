
    // Uso de Let y Const
    let nombre:string = "Ricardo Tapia";
    let edad:number = 23;
    const PERSONAJE = {
      nombre: nombre,
      edad: edad
    };

    console.log(PERSONAJE);


    // Cree una interfaz que sirva para validar el siguiente objeto
    interface Superheroe {
      nombre: string,
      artesMarciales: string[]
    }

    let batman:Superheroe ={
      nombre: "Batmana",
      artesMarciales: ['Jujitsu','Ninjutsu']
    }


    // Convertir esta funcion a una funcion de flecha
    let  resultadoDoble = ( a:number, b:number ) =>  { return (a + b) * 2}

    console.log (resultadoDoble(10,20));

    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    function getAvenger( nombre, poder?, arma ="arco" ){
      let mensaje;
      if( poder ){
         mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
      }else{
         mensaje = nombre + " tiene un " + arma
      }
      return mensaje;
    };

    console.log(getAvenger("hawkeye"));


    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

    class Rectangulo {

      constructor(public base:number,public altura:number){}

      calcularArea( ){ return (this.base*this.altura)}

    }


    let A = new Rectangulo(5,6);

    console.log(A.calcularArea());
