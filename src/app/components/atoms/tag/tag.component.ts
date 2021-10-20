import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../types/type.categories';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() 
  category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
