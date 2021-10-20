import { Component, OnInit, Input } from '@angular/core';
import { fadeInOut_f } from 'src/app/animations/animations';
import { Categories } from '../../types/type.categories';


@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
  animations:[
    fadeInOut_f('appear','600ms', 'ease-out'), 
  ]
})
export class PostCommentsComponent implements OnInit {

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
  
  @Input()
  content:string = ''




  constructor() { }

  ngOnInit(): void {
  }

}
