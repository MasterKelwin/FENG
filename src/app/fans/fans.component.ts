import { Component, OnInit } from '@angular/core';
import { FanRegisterService } from '../services/fan-register.service';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss']
})
export class FansComponent implements OnInit {

  userData: any[] = [];

  constructor(private service: FanRegisterService) { }

  ngOnInit(): void {
    this.userData = this.service.data;
  }

}
