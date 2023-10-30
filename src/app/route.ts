import { Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
 


 
 
export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  }
  ,

  {path: '**', component: NotfoundComponent},
]

