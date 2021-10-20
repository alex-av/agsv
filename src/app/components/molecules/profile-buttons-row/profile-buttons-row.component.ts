import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-buttons-row',
  templateUrl: './profile-buttons-row.component.html',
  styleUrls: ['./profile-buttons-row.component.css'],
  animations:[]
})
export class ProfileButtonsRowComponent implements OnInit {

  @Input()
  visitor:boolean = false



  // TODO: Crear función dummy con output de cada botón 

  writeMessage(evt:Event){
    console.log('mess');
  }

  editProfile(evt:Event){
    console.log('profile');
  }

  follow(){
    console.log('followUser')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
