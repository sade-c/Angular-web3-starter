import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access/access.component';



@NgModule({
  declarations: [
    AccessComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
