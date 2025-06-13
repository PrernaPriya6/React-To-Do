import React from 'react';
import TodoItem from './TodoItem.js';

export default function TodoList({ tasks, onToggle, onRemove }) {
  if (!tasks.length) return <p>No tasks.</p>;
  return (
    <ul>
      {tasks.map(t => (
        <TodoItem
          key={t.id}
          task={t}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
