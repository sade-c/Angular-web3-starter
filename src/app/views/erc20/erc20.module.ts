import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Erc20RoutingModule } from './erc20-routing.module';
import { Erc20Component } from '../erc20/erc20.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Erc20Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    Erc20RoutingModule
  ]
})
export class Erc20Module { }
