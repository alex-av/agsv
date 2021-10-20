import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v2-login',
  templateUrl: './v2-login.component.html',
  styleUrls: ['./v2-login.component.css']
})
export class V2LoginComponent implements OnInit {

  constructor(private router:Router){

  }
  ngOnInit(): void {
  }
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }


}
