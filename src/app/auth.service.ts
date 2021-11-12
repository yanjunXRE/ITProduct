import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  regUserUrl:string = "http://localhost:3000/api/reguser/";
  authuser:string = "http://localhost:3000/api/authuser/";
  forgotuser:string = "http://localhost:3000/api/forgotuser/";
url:string='http://localhost:3000/api/userRegist/';
   constructor(private http: HttpClient) { }
   regUser(username: string, pw: string, role: string,email:string) {
   return this.http.post<any[]>(this.regUserUrl, { 'username': username,
  'password': pw, 'role': role,'email' :email});
   }
   authUser(username: string, pw: string) {
   return this.http.post<any[]>(this.authuser, { 'username': username,
  'password': pw });
}
forgot(username: string, pw: string) {
  return this.http.post<any[]>(this.forgotuser, { 'username': username,
 'password': pw });
}
userRegist(username:string){
  return this.http.get<any[]>(this.url+username);
}
setSecureToken(secure_token: string) {
sessionStorage.setItem("LoggedIn", secure_token)

}
setEmailToken(email:string) {
  sessionStorage.setItem("email", email)
  
  }
getSecureToken() {
return sessionStorage.getItem("LoggedIn")

}
setUserRole(role: string) {
sessionStorage.setItem("UserRole", role);
}
getUserRole() {
return sessionStorage.getItem("UserRole")
}
logout() {
sessionStorage.removeItem("LoggedIn");
sessionStorage.removeItem("UserRole");
sessionStorage.removeItem("email")
}
isLoggedIn() {
  return this.getSecureToken() !== null;
  }
 
  isAdmin() {
 return (this.getUserRole() == "admin");
  }
 
  isUser() {
  return (this.getUserRole() == "user" || this.getUserRole() == "admin");
  }
}
