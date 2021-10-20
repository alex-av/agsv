import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormQuestionComponent implements OnInit {



  loginForm = this.fb.group({
    question: new FormControl(''),


  })
  
  constructor(private fb: FormBuilder, ) { }

  ngOnInit(): void {
  }



}
