import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.css']
})
export class FormCommentComponent implements OnInit {
 @Input() placeholder:string=""
 @Input() answerBoxVisible:boolean = true;
  constructor() { }
  
  ngOnInit(): void {
  }

  sendMessage(msj:string){
    console.log(msj)
  }

}
