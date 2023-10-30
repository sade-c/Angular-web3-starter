import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
 
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfig } from 'src/app/layouts/appconfig';
import { ConfigService } from 'src/app/layouts/service/app.config.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
      :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
      }

      :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }

      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
    ],
    standalone: true,
    imports: [
        InputTextModule,
        PasswordModule,
        FormsModule,
        CheckboxModule,
        ButtonModule,
        RippleModule,
    ],
})
export class LoginComponent implements OnInit, OnDestroy {
  valCheck: string[] = ['remember'];

  password?: string;
  config!: AppConfig;
  subscription!: Subscription;

  constructor(public configService: ConfigService) { }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
