import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-newFan',
  templateUrl: './newFan.component.html',
  styleUrls: ['./newFan.component.scss']
})



export class NewFanComponent {

  @Output() atRegister = new EventEmitter<any>();

  name: string | undefined;
  age: number | undefined;
  team: string | undefined;

  register() {
    this.atRegister.emit({
      name: this.name, age: this.age, team: this.team
    });
    this.cleanFields()
  }

  cleanFields() {
    this.name = '';
    this.age = undefined;
    this.team = '';
  }

 }