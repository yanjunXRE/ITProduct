import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ItserviceService } from '../ItService.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'List of Posts';
  posts: any = [];
  selected:any={}
  user;
  status='pending'
  myForm: FormGroup;
  constructor(private postsService: PostsService, private fb: FormBuilder,private ItserviceService:ItserviceService) {
  // Retrieve posts from the API
  // this.postsService.getAllPosts().subscribe(posts => {
  // this.posts = posts;
  // });
  if(sessionStorage.getItem('LoggedIn')){
  this.user=sessionStorage.getItem('LoggedIn').toUpperCase()
  }else{
    this.user="GUEST"
  }
  this.ItserviceService.getCart(this.user,this.status).subscribe(posts => {
     this.posts = posts;
     this.posts
  });
  }

 
  ngOnInit() {
    this.myForm = this.fb.group({
    name: '',
    quote: ''
    });
     }
    
     onSubmit(){
     this.postsService.insertQuote(this.myForm.value.name,
    this.myForm.value.quote).subscribe(results => {
     location.reload();
     });
     }
     deleteCart(id: number)
     {
     this.ItserviceService.deleteCart(id).subscribe(results => {
     location.reload();
     });
     }
     upQuantity(id: number)
     {
      this.ItserviceService.getOneCart(id).subscribe(posts => {
        this.selected = posts;
        this.selected.quantity++;
        console.log(this.selected.quantity)
        console.log(id)
        this.ItserviceService.updateCart(this.selected).subscribe(posts => {
          location.reload();
       
          });
     });
         
     }
     downQuantity(id: number)
     {
      this.ItserviceService.getOneCart(id).subscribe(posts => {
        this.selected = posts;
        this.selected.quantity--;
        console.log(this.selected.quantity)
        
        this.ItserviceService.updateCart(this.selected).subscribe(posts => {
          location.reload();
    
          });
     });
}
}