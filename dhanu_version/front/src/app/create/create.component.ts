import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  public createForm: FormGroup;
  // public email: any;

  // createForm = new FormGroup({

  //   userName: new FormControl(this.create.userName, Validators.required),
  //   email : new FormControl('', Validators.required),
  //   phnumber : new FormControl(''),
  //   password : new FormControl(''),
  //   country : new FormControl('')
  // });


  ngOnInit(): void {
    this.createForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phNumber: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  get c() { return this.createForm.controls; }
}