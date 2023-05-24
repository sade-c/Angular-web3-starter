import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashboardComponent
    ]
})
export class DashboardModule { }
