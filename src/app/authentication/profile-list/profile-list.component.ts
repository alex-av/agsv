import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: '../../views/v4-profile/v4-profile.component.html',
  styleUrls: ['../../views/v4-profile/v4-profile.component.css']
})
export class ProfileListComponent implements OnInit {

  userType:string | null = '';

  constructor(private router:Router, private activateRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }
  goto(url:string){
    this.router.navigateByUrl(url);
  }
  cancelReg(url:string){
    this.router.navigateByUrl(url);
  }
  goBack(url:string){
    this.router.navigateByUrl(url);
  }
}
