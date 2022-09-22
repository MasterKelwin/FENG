import { Component } from '@angular/core';
import { FanRegisterService } from './services/fan-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FENG';

  constructor(private service: FanRegisterService) {

  }

  register($event: any) {
    this.service.add($event);
  }
}
