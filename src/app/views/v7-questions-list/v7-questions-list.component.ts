import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v7-questions-list',
  templateUrl: './v7-questions-list.component.html',
  styleUrls: ['./v7-questions-list.component.css']
})
export class V7QuestionsListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }
}

