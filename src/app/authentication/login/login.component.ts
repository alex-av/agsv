import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModelSession } from 'src/app/core/models/session.model';
import { login } from 'src/app/core/store/authentication/actions/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: '../../views/v2-login/v2-login.component.html',
  styleUrls: ['../../views/v2-login/v2-login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }
  
}
