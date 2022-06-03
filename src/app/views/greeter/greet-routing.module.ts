import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from 'src/app/shared/layout/app-main/app.main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GreetComponent } from './greet/greet.component';


const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [{ path: '', component: GreetComponent }],

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GreetRoutingModule { }
