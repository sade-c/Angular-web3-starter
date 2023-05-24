import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from '../notfound/notfound.component';


@NgModule({
    imports: [
        CommonModule,
        NotfoundRoutingModule,
        NotfoundComponent
    ]
})
export class NotfoundModule { }
