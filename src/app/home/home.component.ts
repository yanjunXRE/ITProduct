import { Component, OnInit } from '@angular/core';
import { ItserviceService } from '../ItService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myProduct } from '../myproduct';
// import { myProduct } from '../myProduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ITProduct';
  product: any = [];
  productname;
  feedbackList:any=[]
  loadproduct: any = [];
url='https://www.youtube.com/embed/L678M0y86dw'
user:string;
  newFeedbackForm: FormGroup;
  updateFeedbackForm: FormGroup;
//  product = [ {
//   "id": 1,
//   "name": "HP Pavilion 15",
//   "description": "Best Computer in the world",
//   "inStock": 500,
//   "price": 1200,
//   "image": "./assets/it1.jpg"
//  },
//  {
//   "id": 2,
//   "name": "HP Pavilion 16",
//   "description": "2nd Best Computer in the world",
//   "inStock": 200,
//   "price": 1350,
//   "image": "./assets/it2.jpg"
//  },
//  {
//   "id": 3,
//   "name": "HP Spectres 13",
//   "description": "3rd Best Computer in the world",
//   "inStock": 18,
//   "price": 1400,
//   "image": "./assets/it3.jpg"
//  } ];

 constructor(private postsService: ItserviceService,private formBuilder: FormBuilder) {
  //Retrieve posts from the API
  this.postsService.getUsers().subscribe(product => {
  this.product = product;
  this.loadproduct = product;
  });
  this.newFeedbackForm = this.formBuilder.group({
    productId: [''],
    username:[''],
    productname: ['', Validators.required],
    description: ['', Validators.required],
    rating: ['', Validators.required]
  });

  this.updateFeedbackForm = this.formBuilder.group({
    reviewId: [''],
    username:[''],
    productId: [''],
    productname: [''],
    description: ['', Validators.required],
    rating: ['', Validators.required]
  });
 }
 initializeItems(): void{
  this.product= this.loadproduct;
}
//  onKey(event) {
//    this.initializeItems();
//   const searchTerm = event.srcElement.value;
//   if(!searchTerm){
//     return;
//   }
//   this.product = this.product.filter(currentProducts=>{
//     if(currentProducts.name && searchTerm){
//       if(currentProducts.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
//         return true;
//       }
//       return false;
//     }
//   });
// }
onKey(event) {
 // this.initializeItems();
 const searchTerm = event.srcElement.value;
 if(!searchTerm || searchTerm==null){
  this.postsService.getUsers().subscribe(product => {
    this.product = product;
    });
 }
 this.postsService.getSearch(searchTerm).subscribe((data: any) => {
  this.product = data;
  console.log(data);
});
}

onKey2(event) {
  // this.initializeItems();
  const searchTerm = event.srcElement.value;
  console.log(sessionStorage.getItem('reviewbyproduct'))
 console.log(sessionStorage.getItem('reviewbyproduct'))
 
  this.postsService.retrieveFeedbackByProductnameFilter(sessionStorage.getItem('reviewbyproduct'),searchTerm).subscribe((data: any) => {
   this.feedbackList = data;
   
 });
 console.log(searchTerm);

 }
 // Feedback

 public onViewFeedbackModal(book: any) {
   sessionStorage.setItem('reviewbyproduct',book.name)
  this.postsService.retrieveFeedbackByProductname(book).subscribe((data: any) => {
    this.feedbackList = data;
   
    console.log(data);
  });
}

public onAddFeedback() {
  this.postsService.addNewFeedback(this.newFeedbackForm.value).subscribe(res => {
    console.log('Feedback Created');
    location.reload();
  })
}

public onDeleteFeedback(feedback: any) {
  this.postsService.deleteFeedbackById(feedback).subscribe(res => {
    console.log('Feedback Deleted');
    location.reload();
  })
}

public onUpdateFeedbackModal(feedback: any) {
  this.updateFeedbackForm.patchValue(feedback);
}

public onNewFeedbackModal(book: any) {
  this.newFeedbackForm.patchValue({ productID: book.productId,username:this.user, productname: book.name });
}

public onUpdateFeedback() {
  this.postsService.updateFeedbackById(this.updateFeedbackForm.value).subscribe(res => {
    console.log('Feedbacks Updated');
    location.reload();
  })
}
//  getHeroes(): void {
//   this.posts = this.postsService.getUsers();
// }
  ngOnInit(): void {
    if(sessionStorage.getItem('UserRole')==undefined){
      this.user="GUEST"
         }else{
           this.user=sessionStorage.getItem('LoggedIn')
         }
    // this.getHeroes();
  }

}
