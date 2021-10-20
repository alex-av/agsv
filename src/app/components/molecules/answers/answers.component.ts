import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../types/type.categories';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input()
  rating:number = 0
  @Input()
  votes:number = 0
  @Input()
  userPhoto:string = ''
  @Input()
  userName:string = ''
  @Input()
  category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = '';
  // TODO: Tipo fecha
  @Input()
  answerDate:string=""
  @Input()
  answerTime:string=""
  @Input()
  content:string=""
  @Input()
  noHeaders:boolean=false;
  @Input()
  replyButton:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
