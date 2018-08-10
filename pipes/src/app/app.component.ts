import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre:string = 'Fernando';
  nombre2:string = 'juan JOse jaIme AlfrEdo luIS';
  arreglo:number[] = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  video_id ="rrVDATvUitA";
  mostrar = true;

  a:number= 0.3521;
  salario:number= 1234.5;

  heroe = {
      nombre:"Nombre",
      clave: "Clave",
      edad: 50,
      direccion:{
          calle:"Calle",
          colonia: "Colonia",
      }

  }

  valorDePromesa = new Promise ( (resolve,reject)=>{
      setTimeout(()=>resolve('Llego la data!'),3500)
  });

  fecha= new Date();
}
