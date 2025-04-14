import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './shared/wrapper/wrapper.component';

const routes: Routes = [
    {
      path:'',
      component:WrapperComponent,
      children:[
        {
          path:'',
          loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)

        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
