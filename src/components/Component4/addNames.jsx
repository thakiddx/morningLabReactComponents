import React, { useState } from 'react';

function AddNames() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNames([...names, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <h2>Add Names</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddNames;