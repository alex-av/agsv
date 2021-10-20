import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => ButtonComponent ),
    multi: true
  }]
})
export class ButtonComponent implements ControlValueAccessor {

  /**
   * Setea el tipo de botón
   */
  @Input() 
  type:'button' | 'submit' | 'reset' = 'button';
  /**
   * Parámetro que genera el contenido del botón
  */
  @Input() 
  content:string = '';
  /**
   * Variante del botón
  */
  
  @Input()
  skin:'primary-btn'|'secondary-btn'|'secondary-btn-outline'|'tertiary-btn'|'small-white-btn'|'tertiary-btn-compact'='primary-btn';
  //TODO: Reemplazar estos botones por clases/enum/interfaces


  @Input() isDisabled:boolean=false;

  onChange = (_: any) => {
  };
  onTouch = () => {};


  // Accesor methods
  writeValue(value: any): void {}
  registerOnChange(fn: any): void { 
    this.onChange= fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }


}
