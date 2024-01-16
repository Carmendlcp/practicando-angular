import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
contador=0
  SumaClick(){
    this.contador++
    console.log("sumando");
  }
  restaClick(){
    this.contador--
    console.log("restando");
  }
  RestClick(){
    this.contador=0
    console.log("contador a 0");
  }

}

