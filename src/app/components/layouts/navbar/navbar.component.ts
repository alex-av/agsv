import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UI } from 'src/variables';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  color:string = UI.nav_gray_color;
  selected:string = UI.blue_light;
  
  @Input()
  itemSelected:number=0




  constructor(private router:Router, private activateRoute: ActivatedRoute) { 
   
  }
  
  evalItem(item:number):string{
    if(item===this.itemSelected){
      return 'selected'
    }
    return ''

  }
  ngOnInit(): void {

  }

  // TODO: Temporal
  goto(url:string, menu:number){
    this.router.navigateByUrl(url);
  }

}
