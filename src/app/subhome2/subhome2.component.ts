import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  ItserviceService } from '../itservice.service';
import {  myProduct } from '../myproduct';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subhome2',
  templateUrl: './subhome2.component.html',
  styleUrls: ['./subhome2.component.css']
})
export class Subhome2Component implements OnInit {
  image;
  myForm: FormGroup;
  agreed = false;
  newItem : myProduct;
  _id: any;
  posts: any = [];
  private sub: any;
  public message:string;
imgURL:any;
public imagePath;
  //dependency injection of FormBuilder as an object call fb and a NgbModal
 //call modalService
  //dependency injection of FormBuilder as an object call fb
  constructor(private fb: FormBuilder, private modalService: NgbModal,
   private userService:ItserviceService,private route: ActivatedRoute,private postsService: ItserviceService ) {


   
    
} 
createUserForm(posts){
this.myForm = this.fb.group({
  name: '',
  description:'',
  price: '',
  inStock:''

});
}
   ngOnInit() {
     
    this.createUserForm(this.posts);
    this.sub = this.route.params.subscribe(params => {
      this._id = params['_id']; // + converts string 'id' to a number
    
      });
      if(this._id!=undefined){  
        this.postsService.getUser(this._id).subscribe(posts => {
        this.posts = posts; 
        console.log(this.posts)
        this.myForm.controls.name.setValue(this.posts.name);
        this.myForm.controls.description.setValue(this.posts.description);
        this.myForm.controls.price.setValue(this.posts.price);
        this.myForm.controls.inStock.setValue(this.posts.inStock);
        this.imgURL=this.posts.image;
        
      });}
  
}
preview(files,event:Event){
if(files.length===0)
  return;

  var mineType=files[0].type;
  if(mineType.match(/image\/*/)==null){
    this.message='Only image are supported';
    return;
  }

const file =(event.target as HTMLInputElement).files[0];
// this.myForm.patchValue({image: file.name});
// //this.myForm.get('image').updateValueAndValidity();
var reader= new FileReader();
this.imagePath=files;
reader.onload=(_event)=>{
  this.imgURL=reader.result as string;
  console.log(this.imgURL)
}
reader.readAsDataURL(file)
}
resetDefault(){
  location.reload()
}
    onSubmit(){
    this.image = this.myForm.value.img
      this.userService.addUser(this.myForm.value.name,
     this.myForm.value.description,this.myForm.value.price,this.myForm.value.inStock,this.imgURL ).subscribe(results => {
      location.reload();
      });
      
 this.myForm.reset();
 //for debugging purposes, see this messages in your browser console
 console.log(this.userService.getUsers());
 console.log(this.newItem);
 alert("Add product Successful! Your changes has been saved for "+this.newItem.name);
  }
  onSubmit2(){
    this.userService.updateUser(this._id,this.myForm.value.name,
   this.myForm.value.description,this.myForm.value.price,this.myForm.value.inStock,this.imgURL ).subscribe(results => {
    location.reload();
    });
    
this.myForm.reset();
//for debugging purposes, see this messages in your browser console
console.log(this.userService.getUsers());
console.log(this.newItem);
alert("Add product Successful! Your changes has been saved for "+this.newItem.name);
}
}
