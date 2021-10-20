import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
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
export class FeedsService {

  private static URL = environment.url;
  private static FEEDS = FeedsService.URL+'posts';
  private session!: ModelSession;
  private securityHeaders!: HttpHeaders;
  
  
  constructor(private httpClient: HttpClient, private store: Store< ModelSession >, private router:Router) { 
    
    if(localStorage.getItem('session')){

      this.session = new ModelSession(JSON.parse(localStorage.getItem('session')!.toString()));

      this.securityHeaders = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.session.access_token}`
      });
    }else{
      this.router.navigateByUrl('authentication/login')


    }
    
    
     
    
    
  }

  
  getFeeds(){
    // console.log(this.securityHeaders);
    // return this.httpClient.get(FeedsService.FEEDS, {headers: this.securityHeaders})
    //   .pipe( map( response => response as ModelResponse))
    
    return this.httpClient.get(FeedsService.FEEDS, {headers: this.securityHeaders})
       .pipe( map( response => {
        console.log(response);
        let tmpvalue = response as ModelResponse;
        tmpvalue.data.forEach( reg =>{
        
          reg['Tags'] = reg['Tags'];
        })
        
        return response as ModelResponse;
      }))
      // .pipe( map( response => {
      //   console.log(response);
      //   let tmpvalue = response as ModelResponse;
      //   tmpvalue.data.forEach( reg =>{
        
      //     reg['Tags'] = reg['Tags']['data'];
      //   })
        
      //   return response as ModelResponse;
      // }))
  }
}
