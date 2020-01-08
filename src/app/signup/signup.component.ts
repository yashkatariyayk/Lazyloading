import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(private router: Router, private formBuilder: FormBuilder)  { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
  });}

  onSubmit() {
    this.submitted = true;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
  }
  alert('Register Success');

  this.router.navigate(['/login']);

    }

    
  


  }


