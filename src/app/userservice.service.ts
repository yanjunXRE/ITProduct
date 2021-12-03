import { Injectable } from '@angular/core';
import { myUser } from './myUser';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private listOfUsers: myUser[] = [
    {
    name: 'Jane',
    email: 'Jane@tp.edu.sg',
    password: "password"
    },
    {
    name: 'John',
    email: 'John@tp.edu.sg',
    password: "password"
    }
    ]; 
   
  constructor() { 
    
  }
  getUsers(): myUser[] {
    return this.listOfUsers;
     }
    
     addUser(item: myUser): void {
     this.listOfUsers.push(item);
     }
}
