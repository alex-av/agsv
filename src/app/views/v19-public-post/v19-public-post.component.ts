import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-v19-public-post',
  templateUrl: './v19-public-post.component.html',
  styleUrls: ['./v19-public-post.component.css']
})
export class V19PublicPostComponent implements OnInit {

  @Input()
  formPost:'yo-pregunto'|'yo-comparto'= 'yo-pregunto'
  constructor() { }

  ngOnInit(): void {
  }

}
