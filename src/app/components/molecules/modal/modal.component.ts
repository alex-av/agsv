import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeInOut_f } from 'src/app/animations/animations';
import { IconsTypes } from '../../types/type.styleTypes';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations:[fadeInOut_f('appear','360ms','ease-out')]
})
export class ModalComponent implements OnInit {
  @Input()
  visible:boolean=false
  
  @Input()
  title:string=''

  @Input()
  content:string=''

  @Input()
  bodyData:any;
  
  //TODO: Colors
  @Input()
  color:string=''

  @Input()
  opacity:string=''

  @Input()
  icon:IconsTypes='';


  @Input()
  width:string=""

  @Input()
  type:'modal'|'dialog'='modal'


  @Output()
  onAccept=new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.visible=!this.visible;
  }

  view(){
    this.visible=true;
  }

  cancelButton(){
    this.visible=false
  }

  acceptButton(info:any){
    this.onAccept.emit(info)
    this.visible=false
  }

}
