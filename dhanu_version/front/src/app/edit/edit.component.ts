import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  public editForm: FormGroup;
  ngOnInit(): void {
    this.editForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phNumber: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  get c() { return this.editForm.controls; }
}