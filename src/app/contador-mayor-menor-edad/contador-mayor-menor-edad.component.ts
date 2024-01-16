import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-mayor-menor-edad',
  standalone: true,
  imports: [],
  templateUrl: './contador-mayor-menor-edad.component.html',
  styleUrl: './contador-mayor-menor-edad.component.scss'
})
export class ContadorMayorMenorEdadComponent {
  age=13

      sum(){
        this.age++
    }
   }
