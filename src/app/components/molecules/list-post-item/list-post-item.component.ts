import { Component, Input, OnInit } from '@angular/core';
import { UI } from 'src/variables';
import { PostMediaTypes } from '../../types/type.mediaType';
import { PostType } from '../../types/type.postType';
import { Sizes } from '../../types/type.styleTypes';

@Component({
  selector: 'app-list-post-item',
  templateUrl: './list-post-item.component.html',
  styleUrls: ['./list-post-item.component.css']
})
export class ListPostItemComponent implements OnInit {
  
  @Input()
  postType:PostMediaTypes='none';

  @Input()
  date:string='';

  @Input()
  time:string='';

  @Input()
  question:string=''

  @Input()
  answerCounter:number=0
  
  @Input()
  votesCounter:number=0
  
  @Input()
  relatedAnswer:string=""

  @Input()
  thumbnail:string=""

  @Input()
  postRoute="#"

  @Input()
  answerNotification:boolean=false

  @Input()
  votesNotification:boolean=false

  @Input()
  size:Sizes="1rem"


  nextIconColor:string = UI.blue_light;
  constructor() { }

  ngOnInit(): void {
  }

}
