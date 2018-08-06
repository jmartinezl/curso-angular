function activar(quien:string, objeto:string="algo", momento?:string) {
    let mensaje:string;
    if (momento) {
        mensaje = quien + " activo el " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo el " + objeto;
    }
    console.log(mensaje);
}

activar("Luis","Lampara","mañana");
