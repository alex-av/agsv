import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-v20-chat-view',
  templateUrl: './v20-chat-view.component.html',
  styleUrls: ['./v20-chat-view.component.css']
})
export class V20ChatViewComponent implements OnInit {

  @Input() userName:string = ""
  @Input() userPhoto:string = ""
  @Input() visible:boolean = true;



  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility( visible:boolean ){
    this.visible = visible
  }
}
