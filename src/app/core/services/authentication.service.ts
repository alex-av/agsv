import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { ModelSession } from '../models/session.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static URL = environment.url;
  private static LOGIN_ENDPOINT = AuthenticationService.URL+'oauth/token';

  
  private securityHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  });
  
  constructor(private httpClient: HttpClient) { 
                
            
  }

  
  loginRequest(user:string, password: string){

    
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('client_id', environment.client_id)
      .set('client_secret', environment.client_secret)
      .set('username', user)
      .set('password', password);

    return this.httpClient.post(AuthenticationService.LOGIN_ENDPOINT, body);
  }
}
