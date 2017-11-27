import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { todoListReducer } from './todo-list/store/todo-list.reducers';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    StoreModule.forRoot({todoList: todoListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
