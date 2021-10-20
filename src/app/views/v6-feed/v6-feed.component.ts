import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostType } from 'src/app/components/types/type.postType';
import { ModelPost } from 'src/app/core/models/posts/post.model';
import { ModelTag } from 'src/app/core/models/tag.model';

@Component({
  selector: 'app-v6-feed',
  templateUrl: './v6-feed.component.html',
  styleUrls: ['./v6-feed.component.css']
})
export class V6FeedComponent implements OnInit {

  posts!: [ModelPost];
  answers_count?:number = 0;


  
  constructor(private router:Router) { }
  
  ngOnInit(): void {
    
  }
  
  tagsToArray(tags:[ModelTag]):(string | null)[]{

    return [];
  }
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }
  
  calcRaiting(post:ModelPost): number {
    
    return Number( post.Interactions + post.Like + post.ResponsesLenght + post.Comments.length );
  }

  
  setCatgory(type:string): string{
    
    console.log(type);
    switch(type){
      case 'Yo pregunto':
        return 'pregunta'
        
      case 'Yo comparto':
        return 'compartido'
        
      default:
        return ''
    } 
  }
}
