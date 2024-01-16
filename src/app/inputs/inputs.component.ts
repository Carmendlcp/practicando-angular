import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  tasks = [
    {
      task: "Aprender JavaScript",
      isDone: false,
      priority: 1 // Alta prioridad
    },
    {
      task: "Leer documentación de Angular",
      isDone: false,
      priority: 2 // Prioridad media
    },
    {
      task: "Desarrollar una pequeña aplicación",
      isDone: false,
      priority: 1 // Alta prioridad
    },
    {
      task: "Revisar código anterior",
      isDone: true,
      priority: 3 // Baja prioridad
    },
    {
      task: "Participar en una reunión de equipo",
      isDone: false,
      priority: 1 // Alta prioridad
    }
  ];

deleteTask(index: number) {
    this.tasks.splice(index, 1);
}

sortPriority() {
  this.tasks.sort((a, b) => a.priority - b.priority);
}

deleteLastTask(){
  this.tasks.pop()
}

}
