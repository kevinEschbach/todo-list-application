
import { Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css'],
  animations: [
    trigger('todoDone', [
      state('todo', style({
        color: 'green', 
        transform: 'translateX(0%)',
      })),
      state('done', style({
        color: 'red',
        textDecoration: 'line-through',
        transform: 'translateX(100%)',
      })),
      transition('todo <=> done', animate(1000))
    ])
  ]
})
export class TodoListEntryComponent {

  @Input() name: string;
  @Input() description: string;
  @Input() state: string;

  @Output() deleteMe = new EventEmitter<TodoListEntryComponent>();

  deleteMeFunction(){
    this.deleteMe.emit(this);
    console.log("Trying to delete me")
  }

  constructor(){
    this.state = "todo";
    this.name = "task";
    this.description = ""
  }



  
  toggleState(){
    this.state = this.state === "todo" ? "done" : "todo";
  }

  setName(name: string){
    this.name = name;
  }

  setDescription(description: string){
    this.description = description;
  }
}

