import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput.js';
import TodoFilter from './TodoFilter.js';
import TodoList from './TodoList.js';
import './App.css';

const FILTERS = { ALL: 'all', ACTIVE: 'active', COMPLETED: 'completed' };

function App() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = text => {
    if (!text.trim()) return;
    setTasks([{ id: Date.now(), text, completed: false }, ...tasks]);
  };

  const removeTask = id => setTasks(tasks.filter(t => t.id !== id));
  const toggleTask = id =>
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));

  const filtered = tasks.filter(t =>
    filter === FILTERS.ALL
      ? true
      : filter === FILTERS.ACTIVE
      ? !t.completed
      : t.completed
  );

  return (
    <div className="App">
      <h1>React To‑Do</h1>
      <TodoInput onAdd={addTask} />
      <TodoFilter selected={filter} onChange={setFilter} />
      <TodoList tasks={filtered} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  );
}

export default App;
