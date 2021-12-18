import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


//Permite importar las direcciones de los modulos
const routes: Routes = [

    {
      path: 'auth',
      loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: '',//**Esto es la ruta por defecto localhost:4200 */,
      component: HomePageComponent,
      loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
