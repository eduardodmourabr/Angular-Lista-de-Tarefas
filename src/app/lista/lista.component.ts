import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  title = 'atividade05';
  @Output()
  lista:Array<string> = []
  dadoLocalStorage:string[] | null = []

  ngOnInit():void {
    this.recuperarDadosDoLocalStorage()
  }

  @Input()
  titulo = 'Titulo'

  addStorage(){
    
    localStorage.setItem('dado', JSON.stringify(this.lista))
    var key = localStorage.getItem('listaTarefa')
    console.log('Local Storage:'+key)
  }

  @ViewChild('inputLista')
  ipt!:ElementRef

  add(valor:string):void {
    this.lista.push(valor)

    let arr = JSON.stringify(this.lista)
    localStorage.setItem('dado', arr)
    this.ipt.nativeElement.value = ''
    
  }
  recuperarDadosDoLocalStorage():void{
    let storage = localStorage.getItem('dado')
    let arr = JSON.parse(storage || '[]')
    this.lista = arr
  }
  
  excluirTarefa(index: number):void{
    /* this.lista.splice(this.lista.indexOf(t),1) */

    this.lista.splice(index, 1)
    let arrStr = JSON.stringify(this.lista)
      localStorage.setItem('dado', arrStr)
      this.recuperarDadosDoLocalStorage()
    
  }

  excluirLista():void{
    
    localStorage.setItem('dado', '')
      this.recuperarDadosDoLocalStorage()
    
  }

  quantidade() {
    let n = this.lista.length
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
  @Output()
  btnClickEvent3: EventEmitter<any> = new EventEmitter<any>()
  emitirEvento3(): void{
    this.btnClickEvent3.emit()
  }












  
  


  
}


  
