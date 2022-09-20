import { Component } from "@angular/core";


@Component({
  selector: 'app-newFan',
  templateUrl: './newFan.component.html',
  styleUrls: ['./newFan.component.scss']
})

export class NewFanComponent {

  name: string = '';
  age: number | undefined;
  team: string = '';


  register() {
    console.log('registered');
    console.log(`Nome: ${this.name}`);
    console.log(`Time: ${this.team}`);
    console.log(`Idade: ${this.age}`);
  }
}