import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../../molecules/modal/modal.component';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {
  
  buttons:boolean=false;
  
  @Input()
  visible:boolean=true;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  private toggleButtons(){
    this.buttons=!this.buttons;
  }

  createNewPost(){
    this.buttons=true;

  }

  newQuestion(){
    this.toggleButtons()
    this.router.navigateByUrl('v11');
  }

  newPost(){
    this.toggleButtons()
    console.log('new Post')
  }
  



}
