import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ModelSession } from '../models/session.model';
import { map, filter, tap } from 'rxjs/operators'
import { ModelResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private static URL = environment.url;
  private static PROFILE = ProfileService.URL+'profiles/';
  private session!: ModelSession;
  private securityHeaders!: HttpHeaders;
  
  
  constructor(private httpClient: HttpClient, private store: Store< ModelSession >, private router:Router) { 
    
    this.session = new ModelSession(JSON.parse(localStorage.getItem('session')!.toString()));
    this.securityHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.session.access_token}`
    });
     
    
    
  }

  
  getProfile(profileId:string | null){
    
    return this.httpClient.get(ProfileService.PROFILE + profileId, {headers: this.securityHeaders})
    .pipe( map( response => response as ModelResponse))
      
  }
}
