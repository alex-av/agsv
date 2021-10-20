import { Component, OnInit, Input } from '@angular/core';
import {  fadeInOut_f as fade, slide_X_InOut_f as slideX, slide_Y_InOut_f as slideY} from 'src/app/animations/animations';
import { AppButtonInteraction } from 'src/app/classes/appButton.class';

import { AppButtons, ContextMenu, Gallery } from 'src/app/interfaces/interfaces';
import { UI } from 'src/variables';
import { Categories } from '../../types/type.categories';
import { PostType } from '../../types/type.postType';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations:[
    fade('fadeInOut','900ms', 'ease-out'), 
  ]
})
export class PostComponent implements OnInit {


  @Input()
  userPhotoUrl: string = ''
  
  @Input()
  userName: string = ''


  @Input()
  userCategory:string | '' | 'extensionista' | 'productor' | 'investigador' | 'productora' | 'investigadora' = ''
  
  @Input()
  postDate:string=''

  @Input()
  postTime:string=''

  @Input()
  postCategory:string | '' | 'preguntas' | 'compartido' =''

  @Input()
  postTitle:string=''

  @Input()
  postVideoUrl?:string=''

  @Input()
  videoPoster?:string=''

  @Input()
  postImageUrl:string=''

  @Input()
  tags?:(string | null)[] =[]

  @Input()
  content:string=''

  @Input()
  nAnswers:number=0
  
  @Input()
  nLikes:number=0

  @Input()
  noHeaders:boolean=false;

  @Input()
  noTags:boolean=false;

  @Input()
  noRating:boolean=false

  @Input()
  replyButton:boolean=true;

  @Input()
  buttonInfo:string='Responder'

  @Input()
  rating:number=0;

  @Input()
  votes:number=0;

  @Input()
  postType:string | 'pregunta'|'compartido' = '';

  @Input()
  limitText:number=280;

  @Input()
  noIcons:boolean=false

  @Input() images:Gallery[]|'none'='none'

  
  @Input() options!:ContextMenu[]

  @Input() gotoProfile:AppButtons = this.appButton.blank;
  @Input() gotoPost:AppButtons = this.appButton.blank;
  @Input() likeButton:AppButtons = this.appButton.blank;
  @Input() upVote:AppButtons=this.appButton.blank;
  @Input() downVote:AppButtons=this.appButton.blank;
  @Input() seeMoreComments:AppButtons=this.appButton.blank;


  
  color:string = UI.blue_light;

  icon = (cat:string):'share'|'ask' => {
    if(cat==='compartido') {
      return 'share'
    }
    return 'ask'
  }



  
  constructor(public appButton:AppButtonInteraction) { }
  
  ngOnInit(): void {
    
  }
  






}
