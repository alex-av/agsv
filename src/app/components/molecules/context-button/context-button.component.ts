import { Component, OnInit, Input } from '@angular/core';
import { fadeInOut_f, toggleAnimation } from 'src/app/animations/animations';
import { ContextMenu } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-context-button',
  templateUrl: './context-button.component.html',
  styleUrls: ['./context-button.component.css'],
  animations:[toggleAnimation('appear', 'open', 'close', '1s', 'cubic-bezier(0,.97,.43,1)')]
})
export class ContextButtonComponent implements OnInit {


  @Input()
  show:boolean=false;

  @Input()
  options!:ContextMenu[];
  
  @Input()
  top:string = "";
  @Input()
  left:string = "";
  @Input()
  bottom:string = "";
  @Input()
  right:string = "";
  @Input()
  width:string=""
  constructor() { }
  
  ngOnInit(): void {
  }
  
  contextMenu(visible:boolean){
    this.show=visible;
  }
}
