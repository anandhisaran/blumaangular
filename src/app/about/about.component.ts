import { Component, OnInit } from '@angular/core';
import  $ from 'jquery';
import bulmaCarousel from 'bulma-extensions';
import 'bulma'
import 'bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css'
import 'bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js'
import 'bulma-extensions'
import { HomeService } from '../_services/home.service';
import { CardService  } from '../_services/card.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bgImageListArray: any;
  ListCardImgText: any;
  constructor(private home: HomeService, private card: CardService) { 
    
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
    $("#showModal").click(function() {
      $(".modal").addClass("is-active");  
    });
    
    $(".modal-close").click(function() {
       $(".modal").removeClass("is-active");
    });
    $(document).ready(function() {
      $('#tabs li').on('click', function() {
        var tab = $(this).data('tab');
    
        $('#tabs li').removeClass('is-active');
        $(this).addClass('is-active');
    
        $('#tab-content .tabscustom').removeClass('is-active');
        $('.tabscustom[data-content="' + tab + '"]').addClass('is-active');
      });
    });
    $(document).ready(function(){
       // var carousels = bulmaCarousel.attach(); 
      // carousels now contains an array of all Carousel instances
  });
  this.ListBackgroundImageFront();
  }
 
  ListBackgroundImageFront(){ 
    /* List background images here.. */
    this.home.ListBackgroundImageFront().subscribe(value => {
          this.bgImageListArray = value.result;
    });
  }
}
