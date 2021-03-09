import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin:15,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
