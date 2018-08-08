import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:any = {};
  termino:string = '';

  constructor(private activatedRoute:ActivatedRoute, private _heroesServices:HeroesService, private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes=_heroesServices.buscarHeroes(params['termino'])
      this.termino = params['termino'];
    })
  }

  ngOnInit() {
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
