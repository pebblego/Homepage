import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }
  coockiebox:boolean=true;

  ngOnInit(): void {
  }
  acceptcoockie(){
    this.coockiebox = false
  }
  declinecoockie(){
    this.coockiebox = false
  }
}
