import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut_f } from 'src/app/animations/animations';
import { ContextMenu } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css'],
  animations:[fadeInOut_f('appear','120ms','ease-out')]
})
export class ContextMenuComponent implements OnInit {
  @Input()
  items!:ContextMenu[]
  @Input()
  top:string = "";
  @Input()
  left:string = "";
  @Input()
  bottom:string = "";
  @Input()
  right:string = "";
  @Input()
  visible:boolean=false;
  @Output()
  imVisible:EventEmitter<boolean> = new EventEmitter();
  
  constructor(private router:Router) { }
  
  ngOnInit(): void {

  }
  changeVisibility(){

    this.visible= !this.visible
    this.imVisible.emit(this.visible);

  }

  warning(){
    console.warn('Must provide a valid URL')
  }
  gotoUrl(url:string){
    this.router.navigateByUrl(url)
  }

  fnObject(item:any){
    item.fn(item.params);
    this.visible= !this.visible
    this.imVisible.emit(this.visible);

  }

}
