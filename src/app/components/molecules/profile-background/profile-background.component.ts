import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-background',
  templateUrl: './profile-background.component.html',
  styleUrls: ['./profile-background.component.css']
})
export class ProfileBackgroundComponent implements OnInit {
  @Input()
  imageUrl:string=''
  @Input()
  alt:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
