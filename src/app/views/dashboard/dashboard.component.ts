import { Component, OnInit } from '@angular/core';

import { GlobalAlertService } from 'src/app/shared/global-alert.service';
import { AppConfig } from 'src/app/shared/layout/appconfig';
import { ConfigService } from 'src/app/shared/layout/service/app.config.service';

@Component({
  templateUrl: './dashboard.component.html',
  providers: []
})
export class DashboardComponent implements OnInit {
  config!: AppConfig;

  constructor(public configService: ConfigService, public GlobalAlertService: GlobalAlertService) { }

  ngOnInit() {
    this.config = this.configService.config;

  }
  dene() {
    this.GlobalAlertService.connect();
    console.log('dene');
  }
}
