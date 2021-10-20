import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {


  @Input() profile:string = ''
  @Input() arrow:boolean = true
  @Input() button:boolean = true


  isButton():string {
    
    if(this.button){
      return 'pointer'
    }
    return ''
  }
  constructor() { }



  ngOnInit(): void {
  }

}
