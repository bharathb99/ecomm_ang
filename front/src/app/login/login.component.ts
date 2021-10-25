import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { RetailProfileModel } from '../Models/retailprofile.model';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  retailProfileObj : RetailProfileModel = new RetailProfileModel();
  retailData: any;

  constructor( private fb: FormBuilder,
    private api : ApiService,
    private http:HttpClient,
    private router: Router,
    public aroute: ActivatedRoute,){}

 

  ngOnInit(): void{
    this.loginForm = this.fb.group({
    
    email: ['', [Validators.required,Validators.email] ], 
    password : ['', Validators.required,,Validators.minLength(2) ],
    
  }) 
  
}

get c() { return this.loginForm.controls; }



login(){
     this.api.getData("http://localhost:3000/userDetails").subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       });
       if(user){
        //  alert("Login Success");
        this.router.navigate(['admin']);
         Swal.fire({
                  text: 'Login Success!!',
                  icon: 'warning'
                });
         
         
         this.loginForm.reset();
          window.location.reload();

       }else{
         alert("User Not Found");
       }(err: any)=>{
         alert("Something went wrong");
       }
       
     })
    

    }


   
  }
