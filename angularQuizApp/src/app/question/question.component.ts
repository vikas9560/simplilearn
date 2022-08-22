import { Component, OnInit } from '@angular/core';
import { interval, timeInterval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public yname: string = "";
  public qustionList : any = [];
  public currentQuestion : number = 0;
  public points : number = 0;
  counter = 60;
  correctAnswer : number = 0;
  incorrectAnswer : number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : Boolean = false;
  constructor(private questionService : QuestionService) { }

  logoUrl = "assets/images/angular.png";

  ngOnInit(): void {
    this.yname = localStorage.getItem('yname')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.qustionList = res.questions;
    })
  }

  nextQuestion(){
    this.currentQuestion++;
    this.counter=60;
  }
  previousQuestion(){
    this.currentQuestion--;
    this.counter=60;
  }
  answer(currentQno:number,option:any){

    if(currentQno===this.qustionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }

    if(option.correct){
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.counter=60;
        this.getProgressPresecnt();
      }, 1000);
    }else{
      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.counter=60;
        this.getProgressPresecnt();
      }, 1000);
      this.points -= 10;
    }
  }

  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.points -= 10;
        this.counter = 60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.points=0;
    this.getAllQuestions();
    this.currentQuestion=0;
    this.progress = "0";
  }
  getProgressPresecnt(){
    this.progress= ((this.currentQuestion/this.qustionList.length)*100).toString();
    return this.progress;
  }
}
