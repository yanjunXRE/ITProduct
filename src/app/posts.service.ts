import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string = "http://localhost:3000/api/posts";
  quotesUrl: string = "http://localhost:3000/api/quotes";
  constructor(private http:HttpClient) { }
 
  getAllPosts() {
  return this.http.get<any[]>(this.quotesUrl);
  }
  insertQuote(name: string, newquote: number) {
    return this.http.post<any[]>(this.quotesUrl, { 'name': name, 'quote':
   newquote });
}
}
