import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  title = 'restApp';
  users: any= [];
  loadusers:any=[];
  constructor(private userService: UserService) {
  userService.getUsers().subscribe(users => {
  this.users = users;
  this.loadusers = users;
  console.log(this.users);
  });
  } 

  ngOnInit(): void {
  }
  initializeItems(): void{
    this.users= this.loadusers;
  }
  onKey(event) {
    this.initializeItems();
   const searchTerm = event.srcElement.value;
   if(!searchTerm){
     return;
   }
   this.users = this.users.filter(currentProducts=>{
     if(currentProducts.title && searchTerm){
       if(currentProducts.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
         return true;
       }
       return false;
     }
   });
 }
}
