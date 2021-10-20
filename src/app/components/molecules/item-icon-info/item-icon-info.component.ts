import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-icon-info',
  templateUrl: './item-icon-info.component.html',
  styleUrls: ['./item-icon-info.component.css']
})
export class ItemIconInfoComponent implements OnInit {
  
  @Input()
  icon:string = ''

  @Input()
  time:string = ''

  @Input()
  date:string = ''

  @Input()
  title:string = ''

  @Input()
  summary:string = ''

  @Input() noHeader:boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
