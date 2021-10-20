import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelPost } from 'src/app/core/models/posts/post.model';
import { ModelTag } from 'src/app/core/models/tag.model';
import { ModelProfile } from 'src/app/core/models/user/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { PostsService } from "../../core/services/posts.service";

@Component({
  selector: 'app-profile',
  templateUrl: '../../views/v12-profile-view/v12-profile-view.component.html',
  styleUrls: ['../../views/v12-profile-view/v12-profile-view.component.css']
})
export class ProfileComponent implements OnInit {

  profile: ModelProfile = new ModelProfile;
  profileUrlId: string | null = '0';
  sharedPosts!: [ModelPost];
  replyButton: boolean = false;

  constructor(private profileService: ProfileService, private activRoute: ActivatedRoute, private postServices: PostsService) { 
    this.activRoute.paramMap.subscribe( paramMap => {
        this.profileUrlId = paramMap.get('id');
        this.getprofile(this.profileUrlId);
        this.getSharedPost();
    })
  }

  ngOnInit(): void {
    
  }

  getprofile( profileId: string | null ){
    this.profileService.getProfile( profileId )
      .subscribe( (response) => {
        this.profile = response.data as unknown as ModelProfile;
        console.log(this.profile);
      }, (err) => {
        console.error(err);
      })
  }

  getSharedPost(){
    this.postServices.sharedPost()
      .subscribe( (response) => {
        this.sharedPosts = response.data as [ModelPost];
        console.log(this.sharedPosts);
      })
  }
  getCategoryName(categoryName:string){
    
    return categoryName==undefined?'':categoryName.toLowerCase();
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
