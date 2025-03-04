import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="max-w-lg mx-auto mt-6 bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-700">
            <h2 className="text-xl font-semibold bg-green-600 text-white py-3 px-5">My ToDo's</h2>
            <ul className="divide-y divide-gray-700">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center px-5 py-3">
                        <span className="text-lg text-gray-200">{todo.text}</span>
                        
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))} 
                            className="bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-md transition-all duration-200"
                        > Del </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
