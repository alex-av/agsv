import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut_f } from 'src/app/animations/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    fadeInOut_f('appear', '300ms', 'ease-out')
  ]
})
export class ToastComponent implements OnInit {
  @Input() visible:boolean = false;
  @Input() color: 'red' | 'green' | 'yellow' | 'white' | 'blue' | string= 'white' 

  @Input() message:string="Message"

  @Input() floating:boolean=false;

  @Input() top:string='';
  @Input() left:string='';
  @Input() right:string='';
  @Input() bottom:string='';

  constructor() { }

  ngOnInit(): void {
  }

  closeToast(){
    this.visible=!this.visible;
  }
}
