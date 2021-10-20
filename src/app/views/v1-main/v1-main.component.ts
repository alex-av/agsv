import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-v1-main',
  templateUrl: './v1-main.component.html',
  styleUrls: ['./v1-main.component.css']
})
export class V1MainComponent {


  constructor(private router:Router){

  }
  // TODO: Temporal
  goto(url:string){
    this.router.navigateByUrl(url);
  }
}


