import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  UserserviceService } from '../userservice.service';
import {  myUser } from '../myUser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  agreed = false;
  newItem : myUser;
  results: any = false;
  title="Login"
  //dependency injection of FormBuilder as an object call fb and a NgbModal
 //call modalService
  //dependency injection of FormBuilder as an object call fb
  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private authService: AuthService,private router: Router ) {}

   ngOnInit() {
    this.myForm = this.fb.group({
    name: '',
    password: '',
    });
    }
  
 onSubmit() {
   
  this.authService.authUser(this.myForm.value.name.toUpperCase( ),
  this.myForm.value.password).subscribe(data => {
  this.results = data;
  if (this.results[0].auth)
  {
  this.authService.setSecureToken(this.myForm.value.name);
  this.authService.setEmailToken(this.results[0].email)
  this.authService.setUserRole(this.results[0].role);
  alert("Login Successful");
  if(this.results[0].role=="user"){
  this.router.navigateByUrl('/user');
  }else{
    this.router.navigateByUrl('/admin');
  }
 
  } else{
   console.log("Wrong username or password")
   alert("Wrong username or password");
   }
  });
   
  

  }
}
