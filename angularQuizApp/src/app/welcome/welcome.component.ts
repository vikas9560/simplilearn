import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('yname') nameKey!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem('yname', this.nameKey.nativeElement.value);
  }

}
