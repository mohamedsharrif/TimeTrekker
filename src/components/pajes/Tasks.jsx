import React from 'react';

function Tasks({ tasks }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks && tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
