import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { slide_Y_InOut_f as slideY } from 'src/app/animations/animations';
import { AppState } from 'src/app/core/store/app.reducer';



@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  animations:[ 
    slideY('slideY','800ms', 'cubic-bezier(0,.86,.35,1)', '-60rem'),
    slideY('slideYUp','800ms', 'cubic-bezier(0,.86,.35,1)', '60rem')
    
  ]
})
export class AppLayout  implements OnInit {
  sideMenu:boolean= false;  
  isOpen:boolean=true;
  isLoadding:boolean=true;
  showFloatingButton: boolean = true;
  constructor(private store: Store<AppState>, private router: Router, private activateRouter: ActivatedRoute){
    
    this.activateRouter.url.subscribe( (url) => {
      this.showFloatingButton = 
        this.router.url.indexOf('/posts/response/') == -1?true:false;
    });

    // se escucha el subscribee de navegación para activar el loggin
    this.store.select('navigation').subscribe( (state) => {
      this.isLoadding = state.isLoading;
    })
  }
  ngOnInit(): void {

  }



  getDialogInfo(event:any){
    console.log(event)
  }

  sideMenuVisibility(value:boolean){
    this.sideMenu = value
  }
}
