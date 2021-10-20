import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.css']
})
export class PageCounterComponent {

  @Input() dots:Number = 0;
  @Input() page:Number = 0;

  addDots(n:Number):Array<Number> {
    return new Array(n)
  }

  activeDot(i:Number, page:Number) :string{

    if( i < page) {
      return 'active'
    }
    return ''
  }


}
