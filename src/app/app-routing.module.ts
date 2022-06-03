import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './shared/layout/app-main/app.main.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashboardModule } from './views/dashboard/dashboard.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
@NgModule({
  imports: [

    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', preloadingStrategy: PreloadAllModules },

    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
