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
status="success"
obj = JSON.parse(sessionStorage.getItem('other'));
  //dependency injection of FormBuilder as an object call fb and a NgbModal
 //call modalService
  //dependency injection of FormBuilder as an object call fb
  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private authService: AuthService,private router: Router,private postsService: ItserviceService  ) 
{
     // Retrieve posts from the API
     this.myForm = this.fb.group({
       accountId:this.obj.accountId,
      username: sessionStorage.getItem('LoggedIn'),
      email:sessionStorage.getItem('email'),
      password: '',
      phoneno:'',
      address:'',
      image:'',
      type:'',
      credit:''

      });
    
      this.myForm.patchValue({ password: this.obj.password,phoneno:this.obj.phoneno, address: this.obj.address,image:this.obj.image,type:this.obj.type,credit:this.obj.credit });
      this.postsService.getCart(this.myForm.value.username,this.status).subscribe(product => {
      this.product = product;
      this.loadproduct = product;
      console.log(this.product)
      });
     }
     reset(){
       location.reload()
     }
     onKey(event) {
      // this.initializeItems();
      const searchTerm = event.srcElement.value;
    
     
      this.postsService.getCartByProduct(this.myForm.value.username,this.status,searchTerm).subscribe((data: any) => {
       this.product = data;
       
     });
     console.log(searchTerm);
    
     }
   ngOnInit() {
    //sessionStorage.setItem('LoggedIn',"GUEST");
    
   
    }
  
 onSubmit() {
  try{
    sessionStorage.setItem('other',JSON.stringify(this.myForm.value))
    
    console.log(sessionStorage.getItem('other'))
  this.authService.updateInfo(
  this.myForm.value).subscribe(data => {
  
    alert("Password change")
  location.reload()
  });
}
catch{Error}{
}
  

   }

 }
