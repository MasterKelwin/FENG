import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss']
})
export class FansComponent implements OnInit {

  @Input() userData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
