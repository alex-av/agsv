import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input()
  name:string=''
  @Input()
  id:string=''
  @Input()
  cols:string=''
  @Input()
  rows:string=''
  @Input()
  content:string=''
  @Input()
  label:string=''
  
  @Input()
  theme:'light'|'dark'='light'

  @Input()
  placeholder:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
