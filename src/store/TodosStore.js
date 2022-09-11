import {action, computed, makeObservable, observable} from "mobx";

export class Todo {
    id = Math.random();
    title;
    completed = false;

    constructor(title) {
        this.title = title;
        makeObservable(this, {
            completed: observable,
            complete: action,
        })
    }

    complete() {
        this.completed = true;
    }
}

export class TodoStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            totalTodos: computed,
            completedTodosCount: computed,
            addTodo: action,
        })
    }

    get totalTodos() {
        return this.todos.length;
    }

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length;
    }

    addTodo(title) {
        this.todos.push(new Todo(title));
    }
}

export const todoStore = new TodoStore();
