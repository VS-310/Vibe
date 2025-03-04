import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        // { id: 1, text: "Learn React", completed: false},
        // { id: 2, text: "Learn Firebase", completed: false},
        // { id: 3, text: "Learn GraphQL", completed: false},
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
