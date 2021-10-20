import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => AutocompleteComponent ),
      multi:true
    }
  ]


})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {

  
  text:string='';
  items:string[]=[]
  results: string[]=[];
  isDisabled:boolean = false
  @Input() id=''
  @Input() name=''
  @Input() label=''
  @Input() type:''|'tag'|'normal'=''
  @Input() multiple:boolean=false;
  @Input() data:string[]=[ 'Opción1', 'Opción2', 'Opción3', 'Opción4' ]
  @Input() theme:'dark'|'light'='light';
  
  
  constructor( ) { }
  
  ngOnInit(): void {
  }
  
  // Borrar el bloque

  

  // TODO: Este filtro se hace a través de una consulta externa
  // Para la funcionalidad en este caso se crea la función filter data
  // debe borrarse la función y la propiedad service
  filterData(event:any){
    let filtered: any[] = [];
    let query = event.query;

    for(let i= 0; i < this.data.length; i++){

      let item = this.data[i]
      if (item.toLowerCase().indexOf(query.toLowerCase())==0){
        filtered.push(item);
      }
    }
    this.results = filtered
    
    
  }
  
  // borrar hasta aquí
  
  search(event:any) {

    this.filterData(event)

  }

  selected(input:any){
    this.items = input.value

  }


  // Control Value Accesor fn
  writeValue(value:any):void{}
  registerOnChange(fn:any):void{}
  registerOnTouched(fn:any):void{}
  setDisabledState(isDisabled:boolean){}

}
