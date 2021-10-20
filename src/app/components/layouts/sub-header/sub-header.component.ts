import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut_f } from 'src/app/animations/animations';
import { ContextMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css'],
  animations:[fadeInOut_f('appear','900ms','ease-out')]
})
export class SubHeaderComponent implements OnInit {

  @Input() title:string = ''
  
  @Input()
  show:boolean=false;

  @Input()
  options!:ContextMenu[];

  constructor() { }

  ngOnInit(): void {
  }
  contextMenu(visible:boolean){
    this.show=visible;
  }



}
