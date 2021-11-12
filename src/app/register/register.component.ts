import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { passwordMatchValidator } from '../custom.validator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { userUsed } from '../custom.valid2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
title="Register"
  myForm: FormGroup;
  agreed = false;
role="user";
user:any=[]
used:boolean;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private authService: AuthService,
 private router: Router) {
  // this.authService.userRegist("TANRU").subscribe(results => {
  //   this.user=results;
  //   console.log(this.user)
  //     });
 }
 validName(form: FormControl,authService:AuthService) {
 
  
      
      if (this.user!=null) return {'used': true} ;
     
      return null;
      
 
 
 
  
     }
     valuechange(newValue) {
     newValue=newValue.toUpperCase();
      console.log(newValue)
      this.authService.userRegist(newValue.toUpperCase()).subscribe(results => {
        this.user=results;
        console.log(this.user)
        if (this.user!=null)  {
          this.used=true
        console.log(this.used)}else{
          this.used=false
        } ;
     
       
          });
    }
 
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwSet : this.fb.group ({
     password: ['', [Validators.required,
     Validators.minLength(8)]],
     password2: ['', [Validators.required]]
      }, {validators: passwordMatchValidator}) 
      });
  }
  onSubmit() {
    if(this.myForm.value.action="register"){
 this.authService.regUser(this.myForm.value.name,
  this.myForm.get('pwSet.password').value, this.role,this.myForm.value.email).subscribe();
  alert("Registration Successful")
 this.router.navigateByUrl('/login');
    }
  }
  toggleAgree() {
    if (this.agreed) this.agreed = false;
    else this.agreed = true;
    }
   //Function to open our content modal
   open(content) {
    this.modalService.open(content);
    }
}
