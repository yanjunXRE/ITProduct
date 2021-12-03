import { ViewChild,Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent {  
  lat = 1.297161;
  long = 103.785751;
  googleMapType = 'roadmap';

  getRoad(){
    this.googleMapType = 'roadmap';
  }
  getSat(){
    this.googleMapType = 'satellite';
  }
  getHybrid(){
    this.googleMapType = 'hybrid';
  }
}

