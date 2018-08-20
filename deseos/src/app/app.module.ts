import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PendientesPage } from '../pages/pendientes/pendientes';
import { TerminadosPage } from '../pages/terminados/terminados';
import { AgregarPage } from '../pages/agregar/agregar';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeseosProvider } from '../providers/deseos/deseos';

@NgModule({
  declarations: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    TabsPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    TabsPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeseosProvider
  ]
})
export class AppModule {}
