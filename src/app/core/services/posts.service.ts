import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ModelResponse } from '../models/response.model';
import { ModelSession } from '../models/session.model';
import { map, filter, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private static URL = environment.url;
  private static POSTS = PostsService.URL+'posts';
  private static SHOW_POST = PostsService.URL+'posts/';
  private static SHOW_SHARED = PostsService.URL+'posts/shared';
  private session!: ModelSession;
  private securityHeaders!: HttpHeaders;
  
  
  constructor(private httpClient: HttpClient, private store: Store< ModelSession >, private router:Router) { 
    
    this.session = new ModelSession(JSON.parse(localStorage.getItem('session')!.toString()));
    this.securityHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.session.access_token}`
    });
     
    
    
  }

  sharedPost(){
    console.log(this.securityHeaders);
    return this.httpClient.get(PostsService.SHOW_SHARED, {headers: this.securityHeaders})
      .pipe( 
        map( response => response as ModelResponse),
      )
  }
  
  showPost(postId: string | null){
    console.log(this.securityHeaders);
    return this.httpClient.get(PostsService.SHOW_POST + postId, {headers: this.securityHeaders})
      .pipe( 
        map( response => response as ModelResponse),
      )
  }
}
