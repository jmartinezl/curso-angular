
 import { Routes, RouterModule } from '@angular/router';
 import { HomeComponent } from './components/home/home.component';

 const APP_ROUTES: Routes = [
   { path: 'home', component: HomeComponent },
   { path: '**', patchMatch: 'full', redirectTo: 'home' }
 ];

 export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);