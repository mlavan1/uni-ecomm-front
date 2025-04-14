import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes)
