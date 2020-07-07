import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo; 
  @Output() remove = new EventEmitter<Todo>(); 

  constructor() { }

  ngOnInit() {
    }

    removeTask() {
      this.remove.emit(this.todoItem);
    }
}
