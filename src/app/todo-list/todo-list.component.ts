import { Component } from '@angular/core';
import { TodoListEntryComponent } from '../todo-list-entry/todo-list-entry.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoList: TodoListEntryComponent[] = [
  ]

  constructor() {
    this.addTask("Task A", "Do Stuff");
    this.addTask("Task B", "Do Stuff");
    this.addTask("Task C", "Do Stuff");
    this.addTask("Task D", "Do Stuff");
    this.addTask("Task E", "Do Stuff");
   }
  

  addTask(name: string, description: string){
    var task = new TodoListEntryComponent();
    task.setName(name);
    task.setDescription(description);
    this.todoList.push(task);
  }
}
