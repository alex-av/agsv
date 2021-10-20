import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../types/type.categories';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input()
  userName:string=''

  @Input()
  category:string | '' | 'extensionista' | 'productor' | 'investigador'| 'productora' | 'investigadora' = '';

  @Input()
  ranking:number=0

  @Input()
  comments:number=0

  @Input()
  location:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
