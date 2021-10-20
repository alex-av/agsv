import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-v18-edit-profile',
  templateUrl: './v18-edit-profile.component.html',
  styleUrls: ['./v18-edit-profile.component.css']
})
export class V18EditProfileComponent implements OnInit {

  loginForm = this.fb.group({
    name: new FormControl(''),
    profile: new FormControl(''),
    profession: new FormControl(''),
    charge: new FormControl(''),
    company: new FormControl(''),

  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
