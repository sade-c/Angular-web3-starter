import {ErrorHandler, enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {RouterModule, withComponentInputBinding} from "@angular/router";
import {routes} from "./app/route";
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GlobalAlertService } from './app/web3/global-alert.service';
import { ToastModule } from 'primeng/toast';
import { provideHttpClient } from '@angular/common/http';
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers:[GlobalAlertService,MessageService,
      provideAnimations()
      ,DialogService,DynamicDialogRef,DynamicDialogConfig,
        importProvidersFrom(RouterModule.forRoot(routes),
        ToastModule,
        ),
      
         provideHttpClient(),
        {provide: 'ENVIRONMENT', useValue: environment},
        { provide: ErrorHandler, useClass: GlobalAlertService },

    ]

})
  .catch(err => console.error(err));
 
