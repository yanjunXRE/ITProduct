import { Injectable } from '@angular/core';
import { myProduct } from './myproduct';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItserviceService {
  // private product:myProduct[] = [ {
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
 
  url:string = "http://localhost:3000/api/products";

  quotesUrl: string = "http://localhost:3000/api/quotes";
  cart:string="http://localhost:3000/api/cart"
  carts:string="http://localhost:3000/api/carts"
  cartsDel:string="http://localhost:3000/api/cartDelete"
  email:string="http://localhost:3000/api/sendEmail"
  order:string="http://localhost:3000/api/order"
  constructor(private http:HttpClient) { }
 
  getUsers() {
  return this.http.get<any[]>(this.url);
 // return this.product;
  }
  getSearch(name) {
    return this.http.get<any[]>(this.url+"/"+name);
   // return this.product;
    }
  getCart(name) {
    return this.http.get<any[]>(this.cart+"/"+name);
   // return this.product;
    }
    getOrder(name) {
      return this.http.get<any[]>(this.order+"/"+name);
     // return this.product;
      }
    getOneCart(id:number) {
      return this.http.get<any[]>(this.carts + "/" + id);
     // return this.product;
      }
    addCart(name: string,price:number,quantity:number, image: string,user:string) {
      return this.http.post<any[]>(this.cart, { 'name': name,'price':price,'quantity': quantity,'image':image,'user':user});
     
     }
     addOrder(name: string,price:number,quantity:number, image: string,user:string) {
      return this.http.post<any[]>(this.order, { 'name': name,'price':price,'quantity': quantity,'image':image,'user':user});
     
     }
     sendEmail(name: string) {
      return this.http.post<any[]>(this.email, { 'email': name});
     
     }
     updateCart(id: number,quantity:number) {
      return this.http.put<any[]>(this.cart + "/" + id, {'quantity': quantity});
}
deleteCart(id: number) {
  return this.http.delete<any[]>(this.cart + "/" + id);
  }
  deleteAllCart(user) {
    
    return this.http.delete<any[]>(this.cartsDel + "/" + user);
    }
  getUser(id: number) {
    return this.http.get<any[]>(this.url + "/" +id);
   // return this.product;
    }
    
     addUser(name: string,description:string,price:number,instock:number, image: string) {
      return this.http.post<any[]>(this.url, { 'name': name, 'description':
     description,'price':price,'inStock': instock,'image':image});
     
     }
     deletePost(id: number) {
      return this.http.delete<any[]>(this.url + "/" + id);
      }
      updateUser(id: number,name: string,description:string,price:number,instock:number, image: string) {
        return this.http.put<any[]>(this.url + "/" + id, {'name': name, 'description':
        description,'price':price,'inStock': instock,'image':image });
}
}
