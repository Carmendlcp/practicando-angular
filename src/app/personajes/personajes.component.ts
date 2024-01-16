import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss',
})
export class PersonajesComponent {
  users  = [
    {
      name: 'Guts',
      age: 24,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/6sided_dice.jpg/220px-6sided_dice.jpg',
      gender: 'Male',
    },
    {
      name: 'Griffith',
      age: 25,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/6sided_dice.jpg/220px-6sided_dice.jpg',
      gender: 'Male',
    },
    {
      name: 'Casca',
      age: 22,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/6sided_dice.jpg/220px-6sided_dice.jpg',
      gender: 'Female',
    },
  ];
}
