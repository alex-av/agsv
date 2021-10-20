import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactions-counter',
  templateUrl: './interactions-counter.component.html',
  styleUrls: ['./interactions-counter.component.css']
})
export class InteractionsCounterComponent implements OnInit {

  @Input()
  count:number= 0;

  @Input()
  color:string = '#ccc';

  @Input()
  label:string = ''

  @Input()
  notification:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
