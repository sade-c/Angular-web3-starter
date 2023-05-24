import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from '../error/error.component';


@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        ErrorComponent
    ]
})
export class ErrorModule { }
