import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect : Boolean = false;
  constructor(private el : ElementRef,private render : Renderer2) { }

  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','#1E5C19');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
    }else {
      this.render.setStyle(this.el.nativeElement,'background','#f00');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
    }
  }

}
