import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://fakestoreapi.com/products/category/electronics";
  urls = "https://fakestoreapi.com/products/";
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>
    (this.url);
    }
    specProduct(id): Observable<any[]> {
      return this.http.get<any[]>
      (this.urls+id);
      }
      sendEmail(url,data){
        return this.http.post(url,data);
      }
}
