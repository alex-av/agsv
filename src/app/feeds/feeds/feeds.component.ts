import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModelPost } from 'src/app/core/models/posts/post.model';
import { ModelTag } from 'src/app/core/models/tag.model';
import { FeedsService } from 'src/app/core/services/feeds.service';
import { AppState } from 'src/app/core/store/app.reducer';
import { offLoadding, onLoadding } from 'src/app/core/store/authentication/actions/navigation.actions';

@Component({
  selector: 'app-feeds',
  templateUrl: '../../views/v6-feed/v6-feed.component.html',
  styleUrls: ['../../views/v6-feed/v6-feed.component.css']
})
export class FeedsComponent implements OnInit {

  private isRdy: boolean = false;
  posts!: [ModelPost];
  constructor(private feedService: FeedsService, private router:Router, private store:Store< AppState >) {
    
    this.store.dispatch(onLoadding( ));
   }

  ngOnInit(): void {

    this.store.select('session')
    .subscribe(  (state) => {
      
        if(!this.isRdy){
          this.getFeeds();
          this.isRdy = true;  
        }
      
    })
  }


  getFeeds(){
     //se carga loadding
     
     
    this.feedService.getFeeds()
      .subscribe( (response) => {
        console.log(response);
        this.posts = response.data as [ModelPost];
      }, (err) => {
        console.error(err);
      }, () => {
        this.store.dispatch( offLoadding( ));
      })
  }
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }

  tagsToArray(tags:[ModelTag]):(string | null)[]{
    
    // console.log(tags);
    if(tags){
      // tagsArray = tags.map( (tag) => tag.TagName);
    }
    
    return ["tagsArray"];
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
