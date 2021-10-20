import { Component, Input, OnInit, Output,EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => CheckBoxComponent ),
    multi:true
  }]
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor {

  checked:boolean=false
  @Input() chkId:string=''
  @Input() label:string=''
  @Input() name:string=''
  @Input() isDisabled:boolean=false;
  //Output
  @Output() onCheck = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  // my methods
  getValue(e:any){
    this.onCheck.emit(e.checked)
  }
  onTouch = () => {};

  // accesor methods

  writeValue(value: any): void {} // modifico el comportamiento en el cambio de estado del campo
  registerOnChange(fn: any): void { 
    this.getValue= fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
