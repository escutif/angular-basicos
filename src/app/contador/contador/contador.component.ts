import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h3>{{titulo}}</h3>

    <!--<button (click)=" numero = numero + 1"> + 1 </button>
      <button (click)=" sumar()"> + 1 </button>
    <button (click)=" numero = numero - 1"> - 1 </button>
    -->
    <h2>La base es: <strong>{{base}}</strong></h2>
    
    <button (click)=" acumular(base)"> + {{base}} </button>
    
    <span>{{ numero }}</span>
    
    <button (click)=" acumular(-base)"> - {{base}} </button>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App'; //propiedades
    numero: number = 10;
    base  : number = 5;
  
    sumar() {
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }
    
    acumular(valor: number) {
      this.numero += valor;
    }
}