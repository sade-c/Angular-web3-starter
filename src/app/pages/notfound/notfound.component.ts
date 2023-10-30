import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss'],
    standalone: true,
    imports: [CommonModule,RouterModule],

})
export class NotfoundComponent {

  constructor() { }



}
