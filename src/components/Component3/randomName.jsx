import React, { useState } from 'react';

function RandomName() {
  const [names, setNames] = useState(['Alice', 'Bob', 'Charlie', 'David']);
  const [randomIndex, setRandomIndex] = useState(0);

  const handleChange = () => {
    const newIndex = Math.floor(Math.random() * names.length);
    setRandomIndex(newIndex);
  };

  return (
    <div>
      <h2>Random Name Display</h2>
      <div>
        <button onClick={handleChange}>Change Name</button>
      </div>
      <div>
        <p>{names[randomIndex]}</p>
      </div>
    </div>
  );
}

export default RandomName;