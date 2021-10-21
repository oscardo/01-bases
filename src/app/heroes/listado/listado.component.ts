import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Superman', 'Batichica', 'Batman', 'Spiderman', 'Sumerce'];
  heroesBorrado:string = '';
  
  borrarHeroes():void {
    this.heroesBorrado = this.heroes.pop() || '';
    console.log('Borrando...');
  }
  agregarHeroes():void {
    this.heroes.push('Ave Maria');
    console.log('Agregando...');
  }
  
}
