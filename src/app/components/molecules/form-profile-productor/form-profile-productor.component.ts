import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-profile-productor',
  templateUrl: './form-profile-productor.component.html',
  styleUrls: ['./form-profile-productor.component.css']
})
export class FormProfileProductorComponent implements OnInit {

  @Input()
  visible?:boolean
  constructor() { }

  ngOnInit(): void {
  }

  getValue(value:boolean){
    console.log('isChecked?: ', value)
  }



}
