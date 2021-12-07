import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItserviceService } from '../ItService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  _id: any;
  posts: any = [];
  addCarter:any={};
  quantity:number=1;
  user=sessionStorage.getItem('LoggedIn')
  private sub: any;
  constructor(private route: ActivatedRoute,private postsService: ItserviceService,private router:Router) {
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id']; // + converts string 'id' to a number
      this.postsService.getUser(this._id).subscribe(posts => {
        this.posts = posts; 
      console.log(this.posts)
  });
      });
      
  } 

  ngOnInit(): void {
    if(this.user==undefined){
      this.user="GUEST"
         }
         console.log(this.user)
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

  this.postsService.addCart(this.addCarter).subscribe(results => {
     alert("Product Added")
     this.router.navigateByUrl('/post');
     });
}
}
