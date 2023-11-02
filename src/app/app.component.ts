import { Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './layouts/service/app.config.service';
import { MenuService } from './layouts/service/app.menu.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [RouterOutlet],
    providers: [ConfigService,MenuService]
})
export class AppComponent implements OnInit {
  menuMode = 'static';
  configService=inject(ConfigService)
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }
}
