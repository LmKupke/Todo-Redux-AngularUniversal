import * as ToDoListActions from './todo-list.actions';
import { ToDo } from '../../models/to-do';
const initialState = {
    todos: [
       new ToDo('Homework', 'Linc'),
       new ToDo('Learn NgRx', 'Linc')
    ]
};
export function todoListReducer(state = initialState, action: ToDoListActions.ToDoListActions) {
    switch (action.type) {
        case ToDoListActions.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case ToDoListActions.DELETE_TODO:
            const oldTodos = [...state.todos];
            oldTodos.splice(action.payload,1);
            return {
                ...state,
                todos: oldTodos
            }
        default:
            return state;
    }
}

