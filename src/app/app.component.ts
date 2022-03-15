import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade 05';

  

  constructor(private _snackBar: MatSnackBar) {
  }
  openSnackBar() {
    this._snackBar.open('Tarefa excluida!!' , 'fechar',{duration:1000});
  }
  openSnackBar2() {
    this._snackBar.open("Lista excluída!" , 'fechar',{duration:1000});
  }
  openSnackBar3() {
    this._snackBar.open("Lista adicionada!" , 'fechar',{duration:1000});
  }

  

}
