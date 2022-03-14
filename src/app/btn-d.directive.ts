import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnD]'
})
export class BtnDDirective {

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
    ) {
      
      this.el.nativeElement.style.borderRadius = '10px'
      this.el.nativeElement.style.border = 'none'
      this.el.nativeElement.style.cursor = 'pointer'
      this.el.nativeElement.style.color = 'white'
      this.el.nativeElement.style.backgroundColor = '#2c2c2c'
      this.el.nativeElement.style.height = '25px'
      this.el.nativeElement.style.width = '25px'
      this.el.nativeElement.style.fontSize = '20px'

      

    }

}
