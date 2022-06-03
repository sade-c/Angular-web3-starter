import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from '../app-main/app.main.component';

@Component({
  selector: 'app-menu',
  template: `
    <div class="layout-menu-container">
      <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
        <!--
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                -->
        <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index" role="none">
          <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{ item.label }}</div>
          <ul role="menu">
            <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
})
export class AppMenuComponent implements OnInit {
  model!: any[];

  constructor(public appMain: AppMainComponent) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }],
      },
      {
        label: 'Pages',
        items: [
          { label: 'Greeter', icon: 'pi pi-fw pi-times-circle', routerLink: ['/greet'] },
          { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'] },
          { label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error'] },
          { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound'] },
          { label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access'] },
        ],
      },
    ];
  }

  onKeydown(event: KeyboardEvent) {
    const nodeElement = <HTMLDivElement>event.target;
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
