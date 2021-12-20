
import { Component, Input} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css'],
  animations: [
    trigger('todoDone', [
      state('todo', style({
        color: 'green'
      })),
      state('done', style({
        color: 'red',
        textDecoration: 'line-through'
      })),
      transition('todo <=> done', animate('100ms'))
    ])
  ]
})
export class TodoListEntryComponent {

  @Input() name: string;
  @Input() description: string;
  @Input() state: string;

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

