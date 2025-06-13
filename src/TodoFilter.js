import React from 'react';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

export default function TodoFilter({ selected, onChange }) {
  return (
    <div>
      {filters.map(f => (
        <button
          key={f.key}
          disabled={selected === f.key}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
