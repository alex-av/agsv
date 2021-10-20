import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPost } from 'src/app/core/models/posts/post.model';
import { ModelTag } from 'src/app/core/models/tag.model';
import { ModelProfile } from 'src/app/core/models/user/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-v12-profile-view',
  templateUrl: './v12-profile-view.component.html',
  styleUrls: ['./v12-profile-view.component.css']
})
export class V12ProfileViewComponent implements OnInit {

  profile!: ModelProfile;
  profileUrlId: string | null = '0';
  sharedPosts!: [ModelPost];
  replyButton: boolean = false;
  constructor(private profileService: ProfileService, private activRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    
  }

  getCategoryName(categoryName:string){
    
  }
  getprofile( profileId: string | null ){
    
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
