import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-basic',
  templateUrl: './link-basic.component.html',
  styleUrls: ['./link-basic.component.css']
})
export class LinkBasicComponent implements OnInit {

  @Input() url:string = '#';
  @Input() size:number = 1;
  @Input() display:string = 'line';
  @Input() classes:string = '';
  @Input() weight:string = 'normal'
  constructor() { }

  ngOnInit(): void {
  }

}
