import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPassword } from 'src/app/core/utils/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formType: string = 'login';
  submitted: boolean = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]        
  },{
    validator: MatchPassword
  });

  constructor(public fb: FormBuilder) { 
    this.loginForm.valueChanges.subscribe(() => this.submitted = false);
    this.registerForm.valueChanges.subscribe(() => this.submitted = false);
  }

  ngOnInit(): void {
  }

  login() {
    this.submitted = true;
  }

  register() {
    this.submitted = true;
  }

  switchForm() {
    this.formType = this.formType === 'login' ? 'register' : 'login';
  }

}
