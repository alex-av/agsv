import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v8-answers-list',
  templateUrl: './v8-answers-list.component.html',
  styleUrls: ['./v8-answers-list.component.css']
})
export class V8AnswersListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    // TODO: Temporal
    goto(url:string){
      this.router.navigateByUrl(url);
    }

}
