import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../types/type.categories';
import { userStatus } from '../../types/type.status';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  ranking:number=0
  @Input()
  points:number=0
  @Input()
  userPhoto:string=''
  @Input()
  userName:string=''
  @Input()
  userStatus:userStatus='desconectado'
  @Input()
  category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = '';
  @Input()
  noIcon:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

}
