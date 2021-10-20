import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelPost } from 'src/app/core/models/posts/post.model';
import { ModelTag } from 'src/app/core/models/tag.model';
import { ModelProfile } from 'src/app/core/models/user/profile.model';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: '../../views/v10-single-question/v10-single-question.component.html',
  styleUrls: ['../../views/v10-single-question/v10-single-question.component.css']
})
export class PostDetailComponent implements OnInit {

  post: ModelPost = new ModelPost();
  replyButton: boolean = false;
  postUrlId: string | null = '0';

  constructor(private postServices: PostsService, private activRoute: ActivatedRoute) { 
    console.log(this.post);
    this.activRoute.paramMap.subscribe( paramMap => {
      this.postUrlId = paramMap.get('id');
      this.showPost(this.postUrlId);
  })
  }

  ngOnInit(): void {
  }

  tagsToArray(tags:[ModelTag]):(string | null)[]{
    
    let tagsArray:string[] = [];
    if(tags){
      tagsArray = tags.map( (tag) => tag.name);
    }
    
    return tagsArray;
  }

  calcRaiting(post:ModelPost): number {
    // console.log(post.Interactions, post.Like, post.ResponsesLenght, post.Comments.length)
    return post.Like + post.ResponsesLenght;
    
  }

  setCatgory(type:string): string{
    
    switch(type){
      case 'Yo pregunto':
        return 'pregunta'
        
      case 'Yo comparto':
        return 'compartido'
        
      default:
        return ''
    } 
  }
  showPost(postId: string | null){

    this.postServices.showPost(postId)
      .subscribe( (resp) => {
        // console.log(resp);
      })
  }
}
