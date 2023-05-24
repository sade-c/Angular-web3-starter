import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { SharedModule } from './app/shared/shared.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(CommonModule, BrowserModule, FormsModule, AppRoutingModule, SharedModule),
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
    ]
})
  .catch(err => console.error(err));
