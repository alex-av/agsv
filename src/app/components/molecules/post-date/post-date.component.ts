import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-date',
  templateUrl: './post-date.component.html',
  styleUrls: ['./post-date.component.css']
})
export class PostDateComponent implements OnInit {

  // TODO: El input date y hour deben transformarse en una función para devolver
        // los días y la hora bien formateada o usar los pipes

  /**
   * Recibe un string como entrada
   */
  @Input()
  date:string = 'No Day';

  @Input()
  time:string = '0:00.mm';

  constructor() { }

  ngOnInit(): void {
  }

}
