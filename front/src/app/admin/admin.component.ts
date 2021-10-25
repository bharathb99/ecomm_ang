
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RetailProfileModel } from '../Models/retailprofile.model';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   

  
  searchText: string = '';
  public searchFilter: any = '';
  
  @Input()
  retailProfileObj: RetailProfileModel={
    id : 0,
    userName :'',
    email : '',
    phone : '',
    password : '',
    country : '',
    networkId: '',
    status : '',
    timeZone: ''
  }

  public createForm : FormGroup;
  // retailProfileObj : RetailProfileModel = new RetailProfileModel();
  retailData : any;
  public editForm: FormGroup;

  
  constructor(private fb: FormBuilder,
    private api : ApiService,
    public router: Router,
    public aroute: ActivatedRoute,) {}
    
    

    p: number = 5;
  
    ngOnInit(): void  {



    this.getAllRetailProfiles();
      
 
      
    this.editForm = this.fb.group({
      userName: ['',Validators.required],
      email: ['', Validators.required ],
      phone:['', Validators.required ],
      password : ['', Validators.required ],
      country : ['', Validators.required ]
    }) 

     }
  
    get c() { return this.editForm.controls; }

    onEdit(rd:any){
      this.api.getData(rd.id).subscribe((res)=>(this.retailProfileObj));
      this.retailProfileObj.id=rd.id;
      this.editForm.controls['userName'].setValue(rd.userName);
      this.editForm.controls['email'].setValue(rd.email);
      this.editForm.controls['phone'].setValue(rd.phone);
      this.editForm.controls['password'].setValue(rd.password);
      this.editForm.controls['country'].setValue(rd.country);
    }

    updateRetailProfileData(){
      this.retailProfileObj.userName = this.editForm.value.userName;
      this.retailProfileObj.email = this.editForm.value.email;
      this.retailProfileObj.phone = this.editForm.value.phone;
      this.retailProfileObj.password = this.editForm.value.password;
      this.retailProfileObj.country = this.editForm.value.country;
    
      this.api.updateData(this.retailProfileObj,this.retailProfileObj.id).subscribe(res=>{
        console.log(res);
        alert("Retail Profile Updated");
        window.location.reload();
      },
      err=>{
        alert("Something went wrong")
      })
    
    } 

    search(){
      this.api.getUserDetails(this.searchText).subscribe(res=>{
        this.retailData=res;
      })
    }

    getAllRetailProfiles(){
      this.api.getData(this.retailProfileObj).subscribe(res=>{
        this.retailData = res;
      })
    }
  }
