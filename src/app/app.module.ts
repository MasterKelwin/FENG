import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewFanComponent } from '../app/newFan/newFan.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
