import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../user.service";
import { ItserviceService } from '../ItService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.css']
})
export class ApiDetailComponent implements OnInit {
addCarter:any=[]
  _id: any;
  posts: any = [];
  user=sessionStorage.getItem('LoggedIn')
  quantity:number=1;
  private sub: any;
  constructor(private router:Router ,private route: ActivatedRoute,private product:UserService,private products:ItserviceService) {
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id']; // + converts string 'id' to a number
    
      });
        this.product.specProduct(this._id).subscribe(posts => {
    this.posts = posts; });
  } 

  ngOnInit(): void {
     if(this.user==undefined){
this.user="GUEST"
   }
  }
  upQuantity()
  {

     
  
    this.quantity++;
   
  }
  downQuantity()
  {
    
   
    if (this.quantity > 1)
    this.quantity--;
    
  }
  
  addCart(){
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id']; // + converts string 'id' to a number
    
      });
      
         
    this.addCarter.customerName = this.user; 
  this.addCarter.status="pending"
  this.addCarter.productname=this.posts.name
  this.addCarter.productImage=this.posts.image
  this.addCarter.productPrice=this.posts.price
  this.addCarter.quantity=this.quantity
  console.log(this.addCarter)
  
    this.products.addCart(this.addCarter).subscribe(results => {
       alert("Product Added")
       this.router.navigateByUrl('/post');
       });
  }
}
