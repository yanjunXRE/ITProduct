import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;
  regUserUrl:string = "https://accountservice20211122163138.azurewebsites.net/api/accounts";
//   authuser:string = "http://localhost:3000/api/authuser/";
//   forgotuser:string = "http://localhost:3000/api/forgotuser/";
// url:string='http://localhost:3000/api/userRegist/';
   constructor(private http: HttpClient) { this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }); }
   regUser(payload:any) {
   return this.http.post<any[]>(this.regUserUrl, payload,
    { headers: this.headers });
   }
   authUser(username: string, pw: string) {
   return this.http.get<any[]>(this.regUserUrl+"/login/"+username+'/'+pw);
}
updateInfo(payload:any) {
  return this.http.put<any[]>(this.regUserUrl+'/'+payload.accountId, payload,
  { headers: this.headers });
}
userRegist(username:string){
  return this.http.get<any[]>(this.regUserUrl+'/userRegistered/'+username);
}
userDelete(username:string){
  return this.http.delete<any[]>(this.regUserUrl+'/'+username);
}
setSecureToken(secure_token: string, id:string,other:any) {
sessionStorage.setItem("LoggedIn", secure_token)
sessionStorage.setItem("user_id",id)
sessionStorage.setItem('other',JSON.stringify(other))
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
sessionStorage.removeItem("user_id")
sessionStorage.removeItem("other")
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
