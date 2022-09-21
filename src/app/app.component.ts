import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FENG';
  userData: any = {};

  register($event: any) {
    console.log($event)
    this.userData = $event;
  }
}
