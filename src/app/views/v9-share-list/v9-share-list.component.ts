import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v9-share-list',
  templateUrl: './v9-share-list.component.html',
  styleUrls: ['./v9-share-list.component.css']
})
export class V9ShareListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goto(url:string){
    this.router.navigateByUrl(url)
  }

}
