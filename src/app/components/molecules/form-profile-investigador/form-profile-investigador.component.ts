import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-profile-investigador',
  templateUrl: './form-profile-investigador.component.html',
  styleUrls: ['./form-profile-investigador.component.css']
})
export class FormProfileInvestigadorComponent implements OnInit {
  @Input()
  visible?:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
