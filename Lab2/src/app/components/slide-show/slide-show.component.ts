import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.css'
})
export class SlideShowComponent {
  images = [
    "assets/images/download.jpeg",
    "assets/images/download1.png",
    "assets/images/download2.png",
    "assets/images/download3.png",
  ]

  srcImage=this.images[0];
  i=0;
  interval:any;


  nextSlide(){
    console.log('clicked');
    this.i++;
    console.log(this.i);
    if(this.i==this.images.length){
      this.i = this.images.length - 1;
      return;
    }
    this.srcImage = this.images[this.i];
    console.log(this.srcImage);
  }

  startShow() {
    this.interval = setInterval(() => {
      this.nextSlide();
      if (this.i === this.images.length - 1) {
        this.i = -1;
      }
    }, 1000);
  }


  stopShow(){
    clearInterval(this.interval);
  }

  prevSlide() {
    this.i--;
    if (this.i < 0) {
      this.i=0;
      return;
    }
    this.srcImage = this.images[this.i];
  }

}
