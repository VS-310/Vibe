import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: 1, text: 'Learn Redux'},
    ],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // method : (state, action) => {}
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }

            state.todos.push(todo);
        },

        updateTodo: (state, action) => {
            const todo = state.todos.map((prevTodo) => (
                prevTodo.id === action.payload.id ? {...prevTodo, text: action.payload.text} : prevTodo
            ));
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }
})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;