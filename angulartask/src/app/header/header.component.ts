import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  siteUrl:string = "https://simplilearn.com/";
  siteLogo:string = "assets/images/simplilearn-logo.svg";
  siteLogoWidth:number = 250;
  siteLogoHeight:number = 70;

}
