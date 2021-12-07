import { Injectable } from '@angular/core';
import { myProduct } from './myproduct';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItserviceService {
   private headers: HttpHeaders;
  //this URL should be amend to indicate port number and API URI accordingly

  //private accessPointUrl: string = 'https://productservice20211122194529.azurewebsites.net/api/products/';
  constructor(private http: HttpClient) {
  //construct a header to ensure all requests are of json type and utf-8 charset
  this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  //create function to retrieve books with eStoreService Web API end point
 
urlFeedback:string="https://reviewservice20211123162505.azurewebsites.net/api/reviews/"
 
  url:string = "https://productservice20211122194529.azurewebsites.net/api/products";

  //quotesUrl: string = "https://localhost:44316/gateway/orders/";
  cart:string="https://orderservice20211203205419.azurewebsites.net/api/orders"
  carts:string="http://localhost:3000/api/carts"
  cartsDel:string="http://localhost:3000/api/cartDelete"
  email:string="http://localhost:3000/api/sendEmail"
  order:string="http://localhost:3000/api/order"
 
 
  getUsers() {
  return this.http.get<any[]>(this.url);
 // return this.product;
  }
  getSearch(name) {
    return this.http.get<any[]>(this.url+"/"+name);
   // return this.product;
    }
  getCart(name,status) {
    return this.http.get<any[]>(this.cart+"/"+name+'/'+status);
   // return this.product;
    }
    getOneCart(id:number) {
      return this.http.get<any[]>(this.cart + "/byone/" + id);
     // return this.product;
      }
    addCart(payload:any) {
      return this.http.post<any[]>(this.cart, payload,
        { headers: this.headers });
     
     }
    //  addOrder(name: string,price:number,quantity:number, image: string,user:string) {
    //   return this.http.post<any[]>(this.order, { 'name': name,'price':price,'quantity': quantity,'image':image,'user':user});
     
    //  }
     sendEmail(name: string) {
      return this.http.post<any[]>(this.email, { 'email': name});
     
     }
     updateCart(payload:any) {
      return this.http.put<any[]>(this.cart + "/" + payload.orderID,payload, {headers: this.headers});
}
deleteCart(id: number) {
  return this.http.delete<any[]>(this.cart + "/" + id);
  }
  deleteAllCart(user) {
    
    return this.http.delete<any[]>(this.cartsDel + "/" + user);
    }
  getUser(id: number) {
    console.log(this.url + "/detail/" +id)
    return this.http.get<any[]>(this.url + "/detail/" +id);
   // return this.product;
    }
    
     addUser(payload: any) {
      return this.http.post(this.url, payload,
        { headers: this.headers });
     
     }
     deletePost(id: number) {
      return this.http.delete<any[]>(this.url + "/" + id);
      }
      updateUser(payload: any) {
        return this.http.put(this.url + '/' + payload.productId, payload,
        { headers: this.headers });
}
public retrieveFeedbackByProductname(payload: any) {
  return this.http.get(this.urlFeedback +'/'+ payload.name,
    { headers: this.headers });
}

public addNewFeedback(payload: any) {
  return this.http.post(this.urlFeedback, payload,
    { headers: this.headers });
}

public deleteFeedbackById(payload: any) {
  return this.http.delete(this.urlFeedback + '/' + payload.reviewId,
    { headers: this.headers });
}

public updateFeedbackById(payload: any) {
  return this.http.put(this.urlFeedback + '/' + payload.reviewId, payload,
    { headers: this.headers });
}
}
