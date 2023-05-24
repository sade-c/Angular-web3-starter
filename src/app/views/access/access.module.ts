import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access/access.component';



@NgModule({
    imports: [
        CommonModule,
        AccessRoutingModule,
        AccessComponent
    ]
})
export class AccessModule { }
