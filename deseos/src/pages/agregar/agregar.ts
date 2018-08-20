import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models/lista.model';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  lista:Lista;

  constructor(public navCtrl: NavController, public navParams: NavParams,public deseosProvider:DeseosProvider) {

    const titulo = this.navParams.get('titulo');
    this.lista=new Lista(titulo);
  }



}
