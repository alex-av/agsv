import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-profile-config',
  templateUrl: './form-profile-config.component.html',
  styleUrls: ['./form-profile-config.component.css']
})
export class FormProfileConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value:boolean){
    console.log('isChecked?: ', value)
  }

}
