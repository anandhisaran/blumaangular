import { Component, OnInit } from '@angular/core';
import  $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
     
      document.addEventListener('DOMContentLoaded', function () {
        var dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('click', function(event) {
          event.stopPropagation();
          dropdown.classList.toggle('is-active');
        });
        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
      
          // Add a click event on each of them
          $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
      
              // Get the target from the "data-target" attribute
              var target = $el.dataset.target;
              var $target = document.getElementById(target);
      
              // Toggle the class on both the "navbar-burger" and the "navbar-menu"
              $el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
      
            });
          });
        }
      
      });
      // Close mobile & tablet menu on item click
     
              // Open or Close mobile & tablet menu 
            //   $('#navbar-burger-id').click(function () { 
            //     if($('#navbar-burger-id').hasClass('is-active'))
            //   { $('#navbar-burger-id').removeClass('is-active'); 
            //   $('#navbar-menu-id').removeClass('is-active'); }
            //   else { $('#navbar-burger-id').addClass('is-active'); 
            //   $('#navbar-menu-id').addClass('is-active'); } 
            // });
      // var dropdown = document.querySelector('.dropdown');
      // dropdown.addEventListener('click', function(event) {
      //   event.stopPropagation();
      //   dropdown.classList.toggle('is-active');
      // });
       
      // var dropdown = document.querySelector('.dropdown');
      // dropdown.addEventListener('click', function(event) {
      //   event.stopPropagation();
      //   dropdown.classList.toggle('is-active');
      // });
      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function() {
       
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
    
      });
      $("#navbarExampleTransparentExample").click(function() {
        $(event.target).siblings('.navbar-dropdown')
        .toggleClass('is-hidden-mobile');

        $('.navbar-link')
        .not($('.navbar-link').has($(event.target)))
        .children('.navbar-dropdown')
        .removeClass('is-hidden-mobile');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
     //  $(".navbar-dropdown").toggleClass("is-active");
        $(".navbar-dropdown").toggleClass("is-hidden-mobile");
  
    });
    });
  }

}
