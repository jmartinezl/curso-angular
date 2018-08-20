import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models/lista.model';
import { AgregarPage } from '../agregar/agregar';



/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public deseosProvider:DeseosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  listaSeleccionado(lista: Lista){
    console.log(lista);

  }

  agregarLista(){
    const alerta = this.alertCtrl.create({
    title:'nueva lista',
    message: 'nombre de la nueva lista deseada',
    inputs:[{
      name:'titulo',
      placeholder:'nombre de la lista'

    }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {

            if(data.titulo.length===0){
              return;
            }
            this.navCtrl.push( AgregarPage,{
              titulo:data.titulo
            });
            //console.log('Saved clicked');
          }
        }
      ]
  });
  alerta.present();
  }

}
