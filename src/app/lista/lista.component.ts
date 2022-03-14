import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  title = 'atividade05';
  lista:Array<string> = []

  @Input()
  titulo = 'Titulo'


  addStorage(){
    
    localStorage.setItem('listaTarefa', JSON.stringify(this.lista))
    var key = localStorage.getItem('listaTarefa')
    console.log('Local Storage:'+key)
  }

  @ViewChild('inputLista')
  ipt!:ElementRef


  add(valor:string):void {
    this.lista.push(valor)
    this.ipt.nativeElement.value = ''
  }
  
  excluirTarefa(t: any):void{
    this.lista.splice(this.lista.indexOf(t),1)
    console.log(this.lista)
    
  }

  excluirLista():void{
    this.lista = [];
    console.log(this.lista)
    
  }


 

  quantidade() {
    let n = this.lista.length
    /* console.log('Quantidade de Tarefas: ' +n) */

    return n

  }
  
  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()
  emitirEvento(): void{
    this.btnClickEvent.emit()
  }
  @Output()
  btnClickEvent2: EventEmitter<any> = new EventEmitter<any>()
  emitirEvento2(): void{
    this.btnClickEvent2.emit()
  }


  
}