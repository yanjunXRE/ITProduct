import { Component, OnInit } from '@angular/core';
import { ItserviceService } from '../ItService.service';
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
  loadproduct: any = [];
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

 constructor(private postsService: ItserviceService) {
  //Retrieve posts from the API
  this.postsService.getUsers().subscribe(product => {
  this.product = product;
  this.loadproduct = product;
  });
 }
 initializeItems(): void{
  this.product= this.loadproduct;
}
 onKey(event) {
   this.initializeItems();
  const searchTerm = event.srcElement.value;
  if(!searchTerm){
    return;
  }
  this.product = this.product.filter(currentProducts=>{
    if(currentProducts.name && searchTerm){
      if(currentProducts.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
        return true;
      }
      return false;
    }
  });
}
 
//  getHeroes(): void {
//   this.posts = this.postsService.getUsers();
// }
  ngOnInit(): void {
    // this.getHeroes();
  }

}
