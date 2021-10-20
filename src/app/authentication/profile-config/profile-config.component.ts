import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-config',
  templateUrl: '../../views/v5-profile-configuration/v5-profile-configuration.component.html',
  styleUrls: ['../../views/v5-profile-configuration/v5-profile-configuration.component.css']
})
export class ProfileConfigComponent implements OnInit {
  
  userType: string | null = '';

  constructor(private router:Router, private activateRoute:ActivatedRoute) {
    this.activateRoute.paramMap.subscribe( paramMap => {
      this.userType = paramMap.get('userType');
      
  })
   }

  ngOnInit(): void {
  }

  cancelReg(url:string){
    this.router.navigateByUrl(url);
  }
  goBack(url:string){
    this.router.navigateByUrl(url);
  }
}
