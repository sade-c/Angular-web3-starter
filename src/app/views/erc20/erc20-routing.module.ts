import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from 'src/app/shared/layout/app-main/app.main.component';
import { Erc20Component } from './erc20.component';


const routes: Routes = [
  {
      path: '',
      component: AppMainComponent,
      children: [{ path: '', component: Erc20Component }],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Erc20RoutingModule { }
