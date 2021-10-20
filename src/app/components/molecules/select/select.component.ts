import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Select } from 'src/app/interfaces/interfaces';
import { AgThemes } from '../../types/type.styleTypes';




@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => SelectComponent),
    multi: true

  }]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input()
  id:string=''
  
  @Input()
  selectedOption!:Select;
  
  @Input()
  items!:Select[];

  @Input()
  theme:AgThemes= 'light'

  @Input()
  placeholder:string=''

  @Input()
  required:boolean=false

  @Output()
  getValue = new EventEmitter<Select>();

  

  constructor() { }

  ngOnInit(): void {

  }

  writeValue( value: any):void {}
  registerOnChange( fn: any ):void {}
  registerOnTouched( fn: any ):void {}
  setDisabledState( isDisabled:boolean ):void{}


  onChange(value:Select){
    //console.log(value?.name)
    this.getValue.emit(value)
  }

}
