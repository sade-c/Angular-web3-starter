import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from 'src/app/shared/layout/app-main/app.main.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppMainComponent,
    children: [{ path: '', component: DashboardComponent }],
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'error',
    loadChildren: () => import('../error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('../notfound/notfound.module').then(m => m.NotfoundModule)
  },
  {
    path: 'access',
    loadChildren: () => import('../access/access.module').then(m => m.AccessModule)
  },
  {
    path: 'greet',
    loadChildren: () => import('../greeter/greeter.module').then(m => m.GreeterModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
