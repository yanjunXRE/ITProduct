import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItserviceService } from '../ItService.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  _id: any;
  posts: any = [];
  quantity:number=1;
  user=sessionStorage.getItem('LoggedIn')
  private sub: any;
  constructor(private route: ActivatedRoute,private postsService: ItserviceService) {
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
  }
  upQuantity()
{
  this.sub = this.route.params.subscribe(params => {
    this._id = params['_id']; // + converts string 'id' to a number
  
    });
      this.postsService.getUser(this._id).subscribe(posts => {
  this.posts = posts; 
  if (this.quantity < this.posts.inStock)
  this.quantity++;
  });
}
downQuantity()
{
  this.sub = this.route.params.subscribe(params => {
    this._id = params['_id']; // + converts string 'id' to a number
  
    });
      this.postsService.getUser(this._id).subscribe(posts => {
  this.posts = posts; 
  if (this.quantity > 1)
  this.quantity--;
  });
}

addCart(){
  this.sub = this.route.params.subscribe(params => {
    this._id = params['_id']; // + converts string 'id' to a number
  
    });
      this.postsService.getUser(this._id).subscribe(posts => {
  this.posts = posts; });
  this.postsService.addCart(this.posts.name,
    this.posts.price,this.quantity,this.posts.image,this.user.toUpperCase() ).subscribe(results => {
     alert("Product Added")
     });
}
}
