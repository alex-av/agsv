import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gallery } from 'src/app/interfaces/interfaces';
import { UI } from 'src/variables';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {
  //TODO: Colocar imagen dummy
  @Input() postImageUrl:string = ''
  
  //TODO: Colocar imagen dummy
  @Input() postVideoUrl?:string = ''

  @Input() videoPoster?:string= ''

  @Input() postTitle:string = ''

  @Input() content:string = ''

  @Input() nAnswers:number=0

  @Input() nLikes:number=0

  @Input() replyButton:boolean= true;

  @Input() buttonInfo:string=''

  @Input() limitText:number = 286

  @Input() noIcons:boolean=false;

  @Input() images:Gallery[]|'none'='none'

  @Output() onClickTitle:EventEmitter<any>= new EventEmitter()
  @Output() onClickParagraph:EventEmitter<any>= new EventEmitter()
  @Output() onClickAnswerButton:EventEmitter<any>= new EventEmitter()
  @Output() onClickLikeButton:EventEmitter<any>= new EventEmitter()

  isExpanded:boolean=false;

  color:string = UI.blue_light

  constructor() { }

  ngOnInit(): void {

  }

  goToview(el:string){
    console.log('Me lleva a la vista del post individual', el)
  }

  clickEvent(evt:Event){
  }
  
  clickTitle(evt:Event){
    this.onClickTitle.emit(evt);
  }
  clickParagraph(evt:Event){
    this.onClickParagraph.emit(evt);
  }
  clickAnswer(evt:Event){
    this.onClickAnswerButton.emit(evt);
  }
  clickLike(evt:Event){
    this.onClickLikeButton.emit(evt);
    
  }
}
