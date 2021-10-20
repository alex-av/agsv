import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() url:string = '';
  @Input() size:number = 1;
  @Input() display:string = 'line';
  @Input() classes:string = '';
  @Input() weight:string = 'normal'
  @Input() color:string = ''
  @Input() routerLink:string = ''
  @Input() routerLinkActive:any=''
  
  constructor() {


   }

  ngOnInit(): void {
  }

}
