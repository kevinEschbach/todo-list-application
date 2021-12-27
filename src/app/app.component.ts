import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodolistApp';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  @ViewChild(TodoListComponent) todoListComponent: any;


  constructor(private observer: BreakpointObserver, private elementRef:ElementRef) {

  }

  @Input() name: string = ""
  @Input() description: string = ""

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
        if(res.matches) {
          this.sidenav.mode ='over';
          this.sidenav.close();
        } else {
          this.sidenav.mode ='side';
          this.sidenav.open();
        }
    });
  }

  addTask(name: string, description: string){
    this.todoListComponent.addTask(name, description);
  }

  onSubmit(f: NgForm){
    this.addTask(f.value.name, f.value.description)
  }



}
