import { Component, OnInit } from '@angular/core';

//import FormBuilder and FormGroup form contents
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserserviceService } from '../userservice.service';
import { myUser } from '../myUser';
import { passwordMatchValidator } from '../custom.validator';
@Component({
  selector: 'app-subhome1',
  templateUrl: './subhome1.component.html',
  styleUrls: ['./subhome1.component.css']
})
export class Subhome1Component implements OnInit{
 //initialize an FormGroup object call myForm
 myForm: FormGroup;
 agreed = false;
 newItem : myUser;
 //dependency injection of FormBuilder as an object call fb and a NgbModal
//call modalService
 //dependency injection of FormBuilder as an object call fb
 constructor(private fb: FormBuilder, private modalService: NgbModal,
  private userService: UserserviceService) {}
 //Construct the FormGroup object using FormBuilder
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
 //Function to invoke an alert
onSubmit()
 {
 this.newItem = new myUser();
this.newItem.name = this.myForm.value.name;
this.newItem.password = this.myForm.get('pwSet.password').value;
this.newItem.email = this.myForm.value.email;
this.userService.addUser(this.newItem);
this.myForm.reset();
//for debugging purposes, see this messages in your browser console
console.log(this.userService.getUsers());
console.log(this.newItem);
alert("Registration Successful! Your changes has been saved for "+this.newItem.name);
 }
 //Function to set toggle the agreed variable between true and false
toggleAgree() {
  if (this.agreed) this.agreed = false;
  else this.agreed = true;
  }
 //Function to open our content modal
 open(content) {
  this.modalService.open(content);
  }
}
