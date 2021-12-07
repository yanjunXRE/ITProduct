import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  UserserviceService } from '../userservice.service';
import {  myUser } from '../myUser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ItserviceService } from '../ItService.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: FormGroup;
  agreed = false;
  newItem : myUser;
  results: any = false;
  user:any=[]
  title="Forgot Password"
  product: any = [];
  loadproduct: any = [];
  //dependency injection of FormBuilder as an object call fb and a NgbModal
 //call modalService
  //dependency injection of FormBuilder as an object call fb
  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private authService: AuthService,private router: Router,private postsService: ItserviceService  ) 
{
      //Retrieve posts from the API
      // this.postsService.getOrder(sessionStorage.getItem('LoggedIn').toUpperCase()).subscribe(product => {
      // this.product = product;
      // this.loadproduct = product;
      // console.log(this.product)
      // });
     }
   ngOnInit() {
  
    
    this.myForm = this.fb.group({
      name: sessionStorage.getItem('LoggedIn'),
      email:sessionStorage.getItem('email'),
      password: ''
      });
    }
  
 onSubmit() {
  try{
  this.authService.forgot(this.myForm.value.name.toUpperCase( ),
  this.myForm.value.password).subscribe(data => {
  
    alert("Password change")
  
  });
}
catch{Error}{
}
  

  }

}
