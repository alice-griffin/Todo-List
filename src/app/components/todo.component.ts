import { Todo } from '../models/todo';
import { Component } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    myStyle = {
        'text-decoration': 'line-through'
    }
    todoItems: Todo[];

    constructor() {
        this.todoItems = [
            {task: 'get dry cleaning', completed: false},
            {task: 'take out trash', completed: true},
            {task: 'schedule doc appointment', completed: false},
            {task: 'pay phone bill', completed: true}
        ]
    }
    
    itemClicked(item: Todo) {
        item.completed = !item.completed; 
    };
}