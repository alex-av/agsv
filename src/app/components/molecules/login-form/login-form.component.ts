import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fadeInOut_f } from 'src/app/animations/animations';
import { ModelSession } from 'src/app/core/models/session.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { login } from 'src/app/core/store/authentication/actions/authentication.actions';
import { offLoadding, onLoadding } from 'src/app/core/store/authentication/actions/navigation.actions';
import { ModelNavigation } from '../../../core/models/navigation.model';

import { Themes } from '../../../interfaces/atoms.interfaces';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations:[fadeInOut_f('appear','500ms','ease-out')]
})
export class LoginFormComponent implements OnInit {
  
  loginForm = this.fb.group({
    user: new FormControl(''),
    password: new FormControl(''),

  })

  theme:Themes = {
    dark:'dark',
    light:'light'
  };

  constructor(private fb: FormBuilder, 
      private route: Router,
      private store: Store< ModelSession >,
      private authService: AuthenticationService) { 

  }

  ngOnInit(): void {
  }

  login() {

    const user = 'lzapataro@comfamiliar.com'; //this.loginForm.get('user')?.value;
    const password = '123456'; //this.loginForm.get('password')?.value;

    const navigation = new ModelNavigation();
    
    //se carga loadding
    this.store.dispatch(onLoadding( ));
    
    //se realiza la petición http
    this.authService.loginRequest(user, password)
      .subscribe( (response: any) => {
        console.log(response);
        const session = new ModelSession( null );
        session.access_token = response['access_token'];
        session.refresh_token = response['refresh_token'];
        session.expires_in = response['expires_in'];
        localStorage.setItem('session',JSON.stringify(session))
        this.store.dispatch( login( session ) );
        
        this.route.navigate(['feeds']);
      }, (err) => {
        alert(this.loginMessageError(err.error.message));
        //console.error(err.error.message);
      }, () => {
        this.store.dispatch( offLoadding( ));
      })
  }

  loginMessageError(message: string){
    switch(message){
      case 'The user credentials were incorrect.':
        return 'Usuario y/o Contraseña Incorrectos';
      default:
        return message;
    }
  }
}
