import { Component, OnInit } from '@angular/core';
import { ItserviceService } from '../ItService.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  product: any = [];
  title="Admin Page"
  constructor(private postsService: ItserviceService) {
    //Retrieve posts from the API
    this.postsService.getUsers().subscribe(product => {
    this.product = product;
    });
   }
   deletePost(id: number)
   {
   this.postsService.deletePost(id).subscribe(results => {
   location.reload();
   });
   }
   increaseQuote(id: number) {
    this.postsService.getUser(id).subscribe(results => {
    location.reload();
    });
    }

  ngOnInit(): void {
  }

}
