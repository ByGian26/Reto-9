import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';



@NgModule({
  declarations: [
    Ejercicio1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Ejercicio1Component
  ]
})
export class RetoModule { }
