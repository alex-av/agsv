import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UI } from 'src/variables';

@Component({
  selector: 'app-answer-stars',
  templateUrl: './answer-stars.component.html',
  styleUrls: ['./answer-stars.component.css']
})
export class AnswerStarsComponent implements OnInit {
  
  color:string = UI.blue_light;
  starColor:string = UI.titles_gray;

  @Input()
  rating:number = 0
  @Input()
  votes:number = 0

  @Output() onUpVote:EventEmitter<any>=new EventEmitter()
  @Output() onDownVote:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  upVote(evt:Event){
    this.onUpVote.emit(evt)
  }
  downVote(evt:Event){
    this.onDownVote.emit(evt)
  }

}
