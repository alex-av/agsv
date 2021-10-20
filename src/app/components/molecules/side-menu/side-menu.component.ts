import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { slide_X_InOut_f } from 'src/app/animations/animations';
import { UI } from 'src/variables';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations:[slide_X_InOut_f('sideX', '600ms', 'cubic-bezier(0,.81,.46,1.09)', '-30rem')]
})
export class SideMenuComponent implements OnInit {

  color:string = UI.blue_light
  @Input()
  visible:boolean = false;

  @Output()
  menuVisible:EventEmitter<boolean> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }

  closeMenu(){
    this.menuVisible.emit(false)

  }

}
