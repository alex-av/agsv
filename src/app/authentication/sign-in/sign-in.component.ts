import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Select } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-sign-in',
  templateUrl: '../../views/v3-sign-up-view/v3-sign-up-view.component.html',
  styleUrls: ['../../views/v3-sign-up-view/v3-sign-up-view.component.css']
})
export class SignInComponent implements OnInit {
  
  oginForm = this.fb.group({
    fullName: new FormControl(''),
    BDate: new FormControl(''),
    email: new FormControl(''),


  })

  value?:string = ''

  constructor(private fb: FormBuilder, private router:Router) { }
  
  nextStep(){
    this.router.navigateByUrl('authentication/profile-list');
  }

  ngOnInit(): void {
  }

  getValue(value:Select){

    this.value= value?.name
  }

  goBack(url:string){
    this.router.navigateByUrl(url);

  }

  cancelReg(url:string){
    // console.log('cancel from v3', url)
  }

}
