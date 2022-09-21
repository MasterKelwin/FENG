import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewFanComponent } from '../app/newFan/newFan.component'
import { AppComponent } from './app.component';
import { FansComponent } from './fans/fans.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NewFanComponent,
    FansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}, 
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
