import { Component, OnInit } from '@angular/core';

/* Reactive Forms imports */
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Initialize loginFormGroup form group for Reactive Forms
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    var loginFormValue = this.loginFormGroup.value;

    if (
      this.loginFormGroup.valid &&
      loginFormValue['username'] == 'admin' &&
      loginFormValue['password'] == 'password'
    ) {
      alert('Te logueaste');

      sessionStorage.setItem('isLoggedIn', 'true');

      this.router.navigate(['home']);
    }
  }
}
