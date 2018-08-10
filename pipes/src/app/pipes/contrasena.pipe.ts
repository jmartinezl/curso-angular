import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, oculto: boolean = true): string {

    let contrasena = '';

    if (oculto) {
        for (let i = 0; i < value.length; i++) {
            contrasena += "*";
        }

        return contrasena;
    }
    else
        return value;
  }

}
