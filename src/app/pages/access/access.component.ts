import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
    styleUrls: ['./access.component.scss'],
    standalone: true,
    imports: [CommonModule,RouterModule],
})
export class AccessComponent {

  constructor() { }



}
