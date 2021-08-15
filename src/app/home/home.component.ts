import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showSlides();
  }

  slideData = ["assets/Images/bc1.jpg", "assets/Images/bc2.jpg", "assets/Images/bc3.jpg"];

  // ====================================================================================================
  // image slider java script start


  slideIndex = 0;
   showSlides() {
  
      let slideIndex=this.slideIndex++;
  
      let mySlidesDiv = document.querySelectorAll('.mySlides');
      // Don't display images while loading
      mySlidesDiv.forEach(divObj => {
          // divObj.style.display = "none";
      });
  
      //reset to 1st image
      if (slideIndex > mySlidesDiv.length) {
          slideIndex = 1
      }
      //display one image at at time
      // mySlidesDiv[slideIndex - 1].style.display = "block";//displaying the image
      setTimeout(this.showSlides, 1650); // Change image every 1.65 seconds  
  }
  
  //=====================================================================================================

}
