let prom1= new Promise( function( resolve, reject){
        setTimeout( () => {
            console.log("Promesa Terminada");


        resolve();

        //reject()
    },1500)
});

console.log("paso 1");

prom1.then(function(){
    console.log("Ejecutarme si termina bien");
},function(){
    console.error("Ejecutarme si termina mal");

})

console.log("paso 2");