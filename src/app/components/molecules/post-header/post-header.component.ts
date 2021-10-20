import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContextMenu } from 'src/app/interfaces/interfaces';
import { Categories } from '../../types/type.categories';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

  @Input()
  userPhoto: string = ''

  @Input()
  userName: string = ''

  @Input()
  category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = '';

  @Input()
  date:string = ''

  @Input()
  time:string = ''

  @Input() options!:ContextMenu[]

  @Output() onClickUserPhoto:EventEmitter<any>=new EventEmitter()
  @Output() onClickUserName:EventEmitter<any>=new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  clickUserPhoto(evt:Event){
    this.onClickUserPhoto.emit(evt)
  }
  clickUserName(evt:Event){
    this.onClickUserName.emit(evt)
  }

}
