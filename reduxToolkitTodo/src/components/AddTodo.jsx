import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'; 

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={addTodoHandler} className="flex items-center bg-gray-800 shadow-md rounded-lg overflow-hidden w-full max-w-lg mx-auto border border-gray-700">
            <input
                type="text"
                placeholder="Write a ToDo..."
                className="w-full px-4 py-2 text-lg bg-gray-900 text-gray-200 border-none outline-none focus:ring-2 focus:ring-green-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 transition-all duration-200"
            >
                Add
            </button>
        </form>
    )
}

export default AddTodo;
