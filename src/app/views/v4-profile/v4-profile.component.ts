import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v4-profile',
  templateUrl: './v4-profile.component.html',
  styleUrls: ['./v4-profile.component.css']
})
export class V4ProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }

  goBack(url:string){
    console.log('goBack from v4', url )

  }

  cancelReg(url:string){
    console.log('cancel from v4', url)
  }
}
