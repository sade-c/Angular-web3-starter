import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule, SharedModule,
        LoginComponent
    ]
})
export class LoginModule { }
