import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v5-profile-configuration',
  templateUrl: './v5-profile-configuration.component.html',
  styleUrls: ['./v5-profile-configuration.component.css']
})
export class V5ProfileConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  goBack(url:string){
    console.log('goBack from v5', url )

  }

  cancelReg(url:string){
    console.log('cancel from v5', url)
  }

}
