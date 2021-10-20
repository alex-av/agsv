import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelPost } from 'src/app/core/models/posts/post.model';
import { ModelTag } from 'src/app/core/models/tag.model';
import { PostsService } from 'src/app/core/services/posts.service';
import { PostComments } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-v10-single-question',
  templateUrl: './v10-single-question.component.html',
  styleUrls: ['./v10-single-question.component.css']
})
export class V10SingleQuestionComponent implements OnInit {
  ngOnInit(): void {
    this.comments = [{
      userPhoto:'/assets/img/profile-photo/user/Rectangle@2x.png',
      userName:'Jon Doe McAllister',
      category:"investigador",
      date : '12 May',
      time : '2:00 p.m',
      content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere iusto und "

    }]
  }

  post: ModelPost = new ModelPost;
  replyButton: boolean = false;
  postUrlId: string | null = '0';

  @Input() comments:PostComments[] = []

    constructor(private activatedRoute: ActivatedRoute, private postServices: PostsService){
      this.activatedRoute.paramMap.subscribe( paramMap => {
        this.postUrlId = paramMap.get('id');
        this.showPost(this.postUrlId);
    })
  }


  showPost(postId: string | null){

    this.postServices.showPost(postId)
      .subscribe( (resp) => {
        this.post = resp.data as unknown as ModelPost;
      })
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



}
