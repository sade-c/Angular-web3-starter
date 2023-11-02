import { Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppMainComponent } from './layouts/app-main/app.main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GreetComponent } from './pages/greet/greet.component';
 


 
 
export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: '',
    component: AppMainComponent,
    children: [{ path: '', component: DashboardComponent }],
  },

  {
    path: 'greet',
   
    component: AppMainComponent,
    children: [{ path: '', component: GreetComponent }],
  
  }
  ,
  {path: '**', component: NotfoundComponent},
]

