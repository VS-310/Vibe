import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    }

    const handleUpdate = () => {
        if (editText.trim()) {
            dispatch(updateTodo({ id: editId, text: editText }));
            setEditId(null);
            setEditText('');
        }
    }

    return (
        <div className="max-w-lg mx-auto mt-6 bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-700">
            <h2 className="text-xl font-semibold bg-green-600 text-white py-3 px-5">My ToDo's</h2>
            <ul className="divide-y divide-gray-700">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center px-5 py-3">
                        {editId === todo.id ? (
                            <input 
                                type="text" 
                                value={editText} 
                                onChange={(e) => setEditText(e.target.value)}
                                className="bg-gray-800 text-white px-2 py-1 rounded"
                            />
                        ) : (
                            <span className="text-lg text-gray-200">{todo.text}</span>
                        )}
                        
                        <div>
                            {editId === todo.id ? (
                                <button 
                                    onClick={handleUpdate}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md transition-all duration-200 mr-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button 
                                    onClick={() => handleEdit(todo.id, todo.text)}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md transition-all duration-200 mr-2"
                                >
                                    Edit
                                </button>
                            )}
                            <button 
                                onClick={() => dispatch(removeTodo(todo.id))} 
                                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-md transition-all duration-200"
                            >
                                Del
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
