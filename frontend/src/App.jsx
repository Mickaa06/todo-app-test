import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!newTodo.title.trim()) return;
    
    try {
      const response = await axios.post(`${API_URL}/todos`, newTodo);
      setTodos([response.data, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API_URL}/todos/${id}`, { completed: !completed });
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="container">
      <h1> Todo List Application</h1>
      
      <div className="add-todo">
        <input
          type="text"
          placeholder="Todo title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={newTodo.description}
          onChange={(e) => setNewTodo({...newTodo, description: e.target.value})}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <div className="todo-list">
          {todos.length === 0 ? (
            <p>No todos yet. Add one!</p>
          ) : (
            todos.map(todo => (
              <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-content">
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                  <small>Created: {new Date(todo.createdAt).toLocaleDateString()}</small>
                </div>
                <div className="todo-actions">
                  <button 
                    onClick={() => toggleTodo(todo._id, todo.completed)}
                    className={todo.completed ? 'completed-btn' : 'complete-btn'}
                  >
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button 
                    onClick={() => deleteTodo(todo._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <div className="status">
        <p>Total Todos: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
}

export default App;