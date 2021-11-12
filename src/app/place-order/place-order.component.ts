import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ItserviceService } from '../ItService.service';
import { Router } from '@angular/router';
import {AgmCoreModule} from '@agm/core'
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  myForm: FormGroup;
user={
name:'tanyanjun14@gmail.com',
email:'tanyanjun14@gmail.com'
}

cart:any=[]
  constructor(private fb: FormBuilder,private http:UserService,private it:ItserviceService,private router:Router) { }
  lat = 1.297161;
  lng = 103.785751;
  googleMapType = 'roadmap';
  onChooseLocation(event){
console.log(event)

}
  getRoad(){
    this.googleMapType = 'roadmap';
  }
  getSat(){
    this.googleMapType = 'satellite';
  }
  getHybrid(){
    this.googleMapType = 'hybrid';
  }
  
  ngOnInit(): void {
  
      if(sessionStorage.getItem('LoggedIn')){
        this.it.getCart(sessionStorage.getItem('LoggedIn').toUpperCase()).subscribe(results => {
          this.cart=results;
           console.log(this.cart)
         });
        this.myForm = this.fb.group({
       
          name: sessionStorage.getItem('LoggedIn'),
          email: sessionStorage.getItem('email'),
          });
      }else{
        this.myForm = this.fb.group({
          name: '',
          email: '',
          });
      }
  }
sendInvoice(){
  if(sessionStorage.getItem('LoggedIn')){
 for (let cart of this.cart){
  this.it.addOrder(cart.name,
    cart.price,cart.quantity,cart.image,cart.user).subscribe(results => {})
  }
  this.it.deleteAllCart(sessionStorage.getItem('LoggedIn').toUpperCase()).subscribe(results => {})

  
  

  }else{
    this.it.deleteAllCart("GUEST").subscribe(results => {})
  }
  this.it.sendEmail(this.myForm.value.email).subscribe(results => {
   
    alert("email sent")
    });
    alert("Payment Successful")
    this.router.navigateByUrl('/home');
}
}
