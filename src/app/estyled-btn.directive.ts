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
      
      /* this.el.nativeElement.style.borderRadius = '10px'
      this.el.nativeElement.style.border = 'none'
      this.el.nativeElement.style.cursor = 'pointer'
      this.el.nativeElement.style.color = 'white' */

      /* this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green')
      this.renderer.setStyle(this.el.nativeElement, 'border', 'none') */

      this.renderer.addClass(this.el.nativeElement, 'styled-btn') // Colocar uma classe no CSS global

    }

    @HostListener('click', ['$event'])
    darOi(evento:any) : void {
      alert('Olá!')
      console.log(evento)
    }

    @HostListener('mouseover')
    alterarCor():void{
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue')
    }

}
