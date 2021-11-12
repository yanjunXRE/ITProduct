import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../user.service";
import { ItserviceService } from '../ItService.service';
@Component({
  selector: 'app-api-detail',
  templateUrl: './api-detail.component.html',
  styleUrls: ['./api-detail.component.css']
})
export class ApiDetailComponent implements OnInit {

  _id: any;
  posts: any = [];
  user=sessionStorage.getItem('LoggedIn')
  quantity:number=1;
  private sub: any;
  constructor(private route: ActivatedRoute,private product:UserService,private products:ItserviceService) {
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
    this.products.addCart(this.posts.title,
      this.posts.price,this.quantity,this.posts.image,this.user.toUpperCase() ).subscribe(results => {
       alert("Product Added")
       });
  }
}
