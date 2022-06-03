import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from './greet/greet.component';
import { GreetRoutingModule } from './greet-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    GreetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GreetRoutingModule,
    SharedModule
  ]
})
export class GreeterModule { }
