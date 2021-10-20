import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-profile-extensionista',
  templateUrl: './form-profile-extensionista.component.html',
  styleUrls: ['./form-profile-extensionista.component.css']
})
export class FormProfileExtensionistaComponent implements OnInit {
  @Input()
  visible?:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
