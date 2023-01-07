import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  mensaje = "Angular es una plataforma y un framework  para crear aplicaciones de una sola pagina en el lado del cliente usando HTML y TypeScript. Angular esta escrito en TipeScript.Implementa la funcionalidad basica y opcionalcomo conjunto de bibliotecas TypeScriptque importas en tus aplicaciones"
  mostrar = true;
  valor = "Ocultar";

  Generar(){
    if(this.mostrar){
      this.valor = "Mostrar"
      this.mostrar = false;
    }else{
      this.valor = "Ocultar"
      this.mostrar = true;
    }
  }
}
