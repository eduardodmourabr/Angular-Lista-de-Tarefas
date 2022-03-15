import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './cmp.component.html',
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent {

    @Input()
    titulo: string = 'titulo'
  
}
