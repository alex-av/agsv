import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.reducer';
import { logout } from 'src/app/core/store/authentication/actions/authentication.actions';
import { ContextMenu } from 'src/app/interfaces/interfaces';
import { Categories } from '../../types/type.categories';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {

  @Input() photoUrl:string = ''
  @Input() category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = ''
  @Input() title:string = ''
  @Input() backButtonUrl:string = ''


  
  constructor(private router:Router, private store: Store< AppState >) { 
    
    
  }
  
  ngOnInit(): void {
  }
  
  backFunction(e:string):void{
    // console.log('URL' , e);
  }
  
  
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }
  
  closeSession = ([param1,param2,param3]:any) => {
    // TODO: Borrar console log es solo para comprobar
    console.log(param1,param2,param3)
    // ^ borrar esto ^
    localStorage.clear();
    this.store.dispatch( logout() );
    this.router.navigateByUrl('authentication/login');
  }
}
