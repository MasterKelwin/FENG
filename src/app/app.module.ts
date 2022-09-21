import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewFanComponent } from '../app/newFan/newFan.component'
import { AppComponent } from './app.component';
import { FansComponent } from './fans/fans.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
