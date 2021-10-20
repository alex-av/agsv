import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModelSession } from './core/models/session.model';
import { AppState } from './core/store/app.reducer';
import { login } from './core/store/authentication/actions/authentication.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'LinkAta';
  isLoadding:boolean=true;
  private lsInfo: string | null = null;
  constructor(private store:Store< AppState >, private activateRoute: ActivatedRoute, 
      private router: Router){
    

    
      
    if (localStorage.getItem('session')){
      
      const session = new ModelSession(localStorage.getItem('session'));
      this.store.dispatch( login( session ) );

      
    }else{

    }
    

  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.store.select('navigation').subscribe( (state) => {
      this.isLoadding = state.isLoading;

    })
  }
  

  
  

}
