import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle-header',
  templateUrl: './subtitle-header.component.html',
  styleUrls: ['./subtitle-header.component.css']
})
export class SubtitleHeaderComponent implements OnInit {

  @Input() 
  icon:string='';

  @Input()
  iconSize:string='1.2rem'

  @Input()
  location:string=''

  @Input()
  noIcon:boolean=false

  @Input()
  title:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
