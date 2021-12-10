import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  UserserviceService } from '../userservice.service';
import {  myUser } from '../myUser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  myForm: FormGroup;
  agreed = false;
  newItem : myUser;
  results: any = false;
  data:any;
  title="Forgot Password"
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
  try{
    console.log(this.myForm.value.name)
    this.authService.userRegist(this.myForm.value.name).subscribe(data=>{
this.data=data;
this.data[0].password=this.myForm.value.password
console.log(this.data)
this.authService.updateInfo(this.data[0]).subscribe(data => {
  
  alert("Password change")
  this.router.navigateByUrl('/login');
});
    })

}
catch{Error}{
}
  

  }

}
