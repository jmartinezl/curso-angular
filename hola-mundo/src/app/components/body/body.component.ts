import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar=true;

    personajes: string[] = ['Hugo','Paco','Luis']

    frase:any = {
        mensaje: 'La vida es corta asi que exprimela al maximo y al extremo',
        autor : "Bob Esponja"
    }

}