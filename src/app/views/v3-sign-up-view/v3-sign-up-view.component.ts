import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-v3-sign-up-view',
  templateUrl: './v3-sign-up-view.component.html',
  styleUrls: ['./v3-sign-up-view.component.css']
})
export class V3SignUpViewComponent implements OnInit {

  oginForm = this.fb.group({
    fullName: new FormControl(''),
    BDate: new FormControl(''),
    email: new FormControl(''),


  })

  value?:string = ''

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  getValue(value:Select){
    console.log(value?.name)
    this.value= value?.name
  }

  nextStep(){
    
  }

  goBack(url:string){
    console.log('goBack from v3', url )

  }

  cancelReg(url:string){
    console.log('cancel from v3', url)
  }

}
