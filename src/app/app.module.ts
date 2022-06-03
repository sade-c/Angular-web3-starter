import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
