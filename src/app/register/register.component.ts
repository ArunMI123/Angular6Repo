import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  formdata;

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl('',Validators.compose([Validators.required,Validators.pattern("[^ @]*@[^ @]*")])),
      password: new FormControl('',this.passwordvalidation),
      cpassword: new FormControl(),
      remember: new FormControl()
    });
  }

    passwordvalidation(formcontrol){
      if(formcontrol.value.length<5){
      return { "password": true };
  }
}
}
