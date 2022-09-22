import { Component, EventEmitter, Output } from "@angular/core";
import { Fan } from "../models/fans.model";
import { FanRegisterService } from "../services/fan-register.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-newFan',
  templateUrl: './newFan.component.html',
  styleUrls: ['./newFan.component.scss']
})

export class NewFanComponent {

  @Output() atRegister = new EventEmitter<Fan>();

  name: string | undefined;
  age: number | undefined;
  team: string | undefined;

  constructor(private service: FanRegisterService, private router: Router) { }

  register() {
    const fan: Fan = { name: this.name, age: this.age, team: this.team };
    this.service.add(fan).subscribe(result => {
      console.log(result);
      this.cleanFields();
      this.router.navigateByUrl('Fans List');

    }, (error) => console.log(error));
  };

  cleanFields() {
    this.name = '';
    this.age = undefined;
    this.team = '';
  }

}
