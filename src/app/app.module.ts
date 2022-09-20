import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewFanComponent } from '../app/newFan/newFan.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
