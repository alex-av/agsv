import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cancel-reg-buttons',
  templateUrl: './cancel-reg-buttons.component.html',
  styleUrls: ['./cancel-reg-buttons.component.css']
})
export class CancelRegButtonsComponent implements OnInit {

  @Output()
  onGoBack= new EventEmitter<string>()

  @Output()
  onCancelReg= new EventEmitter<any>()
  
  constructor() { }

  ngOnInit(): void {
  }





  goBack(url:string){
    console.log('goBack from molecule', url )
    this.onGoBack.emit(url);
  }

  cancelReg(url:string){
    console.log('cancel from molecule')
    this.onCancelReg.emit(url);
  }

}
