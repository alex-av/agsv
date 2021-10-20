import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-share',
  templateUrl: './form-share.component.html',
  styleUrls: ['./form-share.component.css']
})
export class FormShareComponent implements OnInit {

  loginForm = this.fb.group({
    question: new FormControl(''),


  })
  constructor(private fb: FormBuilder, ) { }

  ngOnInit(): void {
  }

}
