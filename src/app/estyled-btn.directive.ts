import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class EstyledBtnDirective {

 /* @Input()
    bg:string = 'orange' */

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
    ) {
      
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red')
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white')
    }

    

    
}
