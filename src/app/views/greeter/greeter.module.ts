import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from './greet/greet.component';
import { GreetRoutingModule } from './greet-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
 



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        GreetRoutingModule,
        SharedModule,
        SharedModule,
        GreetComponent
    ]
})
export class GreeterModule { }
