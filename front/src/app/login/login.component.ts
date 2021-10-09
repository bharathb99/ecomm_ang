import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('bharath'),
    password : new FormControl('')
  })
  
  constructor( private formBuilder: FormBuilder){}

  // loginForm: FormGroup;
  // constructor( 
  //   private fb: FormBuilder,
  //   private router:Router) { }


  ngOnInit(): void {
  //   this.loginForm= new FormGroup({
  //     email : new FormControl(null,[
  //       Validators.required,
  //       Validators.email,
  //       Validators.minLength(5)
  //   ]),
  //     password : new FormControl(null, [
  //       Validators.required,
  //       Validators.minLength(4),
  //       Validators.pattern('^(?=.*[0-9](?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
  //     ]),
  //     agree : new FormControl(null,[
  //       Validators.requiredTrue
  //     ])
  //     })
  //     this.loginForm.valueChanges.subscribe(console.log)
  // }

  // onSubmit(){
  //   if(this.loginForm.invalid){
  //     return;
  //   }
    
    
    
    
    
  //   // this.authService.login(this.loginForm.value).pipe(
  //   //   map(token => this.router.navigate(['home']))
  //   // ).subscribe();
   }

}
