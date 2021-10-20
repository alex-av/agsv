import { Component, OnInit } from '@angular/core';
import { fadeInOut_f, slide_Y_InOut_f } from 'src/app/animations/animations';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  animations:[
    slide_Y_InOut_f('slideY','700ms', 'cubic-bezier(0,.81,.31,.96)','-2rem'),
    fadeInOut_f('appear', '400ms', 'ease-out')
  ]
})
export class Authentication implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
