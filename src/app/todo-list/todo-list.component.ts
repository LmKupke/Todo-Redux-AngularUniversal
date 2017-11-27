import { ToDo } from '../models/to-do';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as ToDoListActions from "./store/todo-list.actions";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDoList: Observable<{todos: ToDo[]}>;
  constructor(private store: Store<{todoList: {todos: ToDo[]}}>) { }

  ngOnInit() {
    this.toDoList = this.store.select('todoList');
  }

  deleteTodo(todoIndex: number){
    this.store.dispatch(new ToDoListActions.DeleteToDo())
  }

}
