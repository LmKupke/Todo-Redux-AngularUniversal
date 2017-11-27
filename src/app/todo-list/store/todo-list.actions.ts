import { Action } from '@ngrx/store';
import { ToDo } from '../../models/to-do';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';


export class AddToDo implements Action {
    readonly type = ADD_TODO;
    public payload: ToDo;
    contructor(payload: ToDo) {
        this.payload = payload;

    }
}

export class DeleteToDo implements Action {
    readonly type = DELETE_TODO;
    public payload: number;
    contructor(payload: number) {
        this.payload = payload;
    }
}

export type ToDoListActions = AddToDo | DeleteToDo;
