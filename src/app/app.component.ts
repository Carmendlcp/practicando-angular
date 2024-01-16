import { ContadorMayorMenorEdadComponent } from './contador-mayor-menor-edad/contador-mayor-menor-edad.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-uno/header.component';
import { ContadorComponent } from './contador/contador.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { InputsComponent } from './inputs/inputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonajesComponent ,ContadorMayorMenorEdadComponent, CommonModule, RouterOutlet, HeaderComponent, ContadorComponent, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practicando';
}
