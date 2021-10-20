import { Component, forwardRef, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';



import { IconsTypes } from '../../types/type.styleTypes';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
  
})
export class InputComponent implements OnInit, ControlValueAccessor {

  // input attributes
  @Input() Labelcontent:string = '';
  @Input() id: string = '';
  @Input() type: string = '';
  @Input() placeholder?: string = '';
  @Input() value: string =  '';
  @Input() icon:IconsTypes = '';
  @Input() iconColor: string = '#C4E5FF'
  @Input() size:string ='1rem'
  @Input() error:boolean=false;
  @Input() isDisabled:boolean=false;
  @Input() required:boolean=false;
  
  // refs
  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement> 

  // private
  @Input()
  theme: string= 'light';
  labelPos: string = '';


// -----------------------------------------------------------------------------------------------------//
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.activateField()
  }
// -----------------------------------------------------------------------------------------------------//
 
  writeValue(value: any): void {} // modifico el comportamiento en el cambio de estado del campo
  registerOnChange(fn: any): void { 
    this.onChange= fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  //TODO: REvisar qué valor usa para bind y crear la función 
  activateField(){

    if (this.value){
      this.labelPos = "labelFilled"
    } else {
      this.labelPos = ""
    }
  }

  // onChange

  onChange = (_: any) => {
  };
  onTouch = () => {};

  onInput(value: Event) {
    this.value = (value.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.onTouch();
    // console.log('Salida: ', (value.target as HTMLInputElement).value);
  }


}
