import { Todo } from '../models/todo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent { 

    todoInput: string;  
    filterInput: string;

    myStyle = {
        'text-decoration': 'line-through'
    }
    todoItems: Todo[];
    filteredItems: Todo[];

    constructor() {
        this.todoItems = [
            {task: 'get dry cleaning', completed: false},
            {task: 'take out trash', completed: true},
            {task: 'schedule doc appointment', completed: false},
            {task: 'pay phone bill', completed: true}
        ];
        this.filteredItems = this.todoItems; 
    }
    
    // itemClicked(item: Todo) {
    //     item.completed = !item.completed; 
    // };

    addTask(): void {
        const newTodo: Todo = {
            task: this.todoInput, 
            completed: false
        }
        this.todoItems.push(newTodo);
    }

    removeTask(item: Todo, i: number): void {
        const itemIndex = this.todoItems.indexOf(item)
        this.todoItems.splice(itemIndex, 1);
    }

    filteredText() {
       this.filteredItems = this.todoItems.filter(item => item.task.includes(this.filterInput));
    }

    filter() {
        if (!this.filterInput) {
        return this.todoItems;
    } else {
        return this.todoItems.filter(item => item.task.includes(this.filterInput));
    }
}
}