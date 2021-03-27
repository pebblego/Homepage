import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.headerprt').animate(5000, function () {
          $('.headerprt').addClass("fixed");
        })
        // $('.headerprt').addClass("fixed", {duration:5000});
      }
      else {
        $('.headerprt').removeClass("fixed");
      }
    });


    $(window).ready(function () {
      $(window).on("scroll", onScroll);

      //smoothscroll
      $('a.nav-link[href^="#"], a.navbar-brand[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.nav-link').each(function () {

          $(this).removeClass('active');
        })

        $(this).addClass('active');

        var target = this.hash,
          menu = target;
        target = $(target);
        $('html, body').stop().animate({
          'scrollTop': target.offset().top - 40
        }, 500, 'swing', function () {
          // window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });
    });

    function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $('.navbar-nav .nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav .nav-link').removeClass("active");
          currLink.addClass("active");
        }
        else {
          currLink.removeClass("active");
        }
      });
    }


  }

}
