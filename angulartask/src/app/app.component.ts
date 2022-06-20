import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartask';

  siteUrl:string = "https://simplilearn.com/";
  siteLogo:string = "assets/images/simplilearn-logo.svg";
  siteLogoWidth:number = 250;
  siteLogoHeight:number = 70;
  message1:string = "In this example, I will show you angular 14 add bootstrap. this example will help you angular 14 install bootstrap 5. you'll learn install bootstrap in angular 14. you can understand a concept of install bootstrap 5 in angular 14."
  message2:string = "As we know Bootstrap is the world's most popular framework for building responsive, and mobile-first sites. bootstrap provide several class for making responsive website for your mobile. So if you want to use bootstrap with angular 14 than i will help you very simple way."
  flag:boolean=false;
  showImage(){
    this.flag = !this.flag;
  }

}
