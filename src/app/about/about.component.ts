import { Component, OnInit } from '@angular/core';
import  $ from 'jquery';
import bulmaCarousel from 'bulma-extensions';
import 'bulma'
import 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'
import 'bulma-extensions'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  constructor() { 
    
  }
  getColor(country) {
    switch (country) {
      case "UK":
        return "green";
      case "USA":
        return "blue";
      case "HK":
        return "red";
    }
  }

  people: any[] = [
    {
      name: "Douglas  Pace",
      country: "UK"
    },
    {
      name: "Mcleod  Mueller",
      country: "USA"
    },
    {
      name: "Day  Meyers",
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      country: "USA"
    }
  ];
  ngOnInit() {
    $(document).ready(function(){
      // var carousels = bulmaCarousel.attach(); 
      // carousels now contains an array of all Carousel instances
  });
   
  }

}
