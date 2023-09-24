import React, { useState } from 'react';

function SimpleInput() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleShowText = () => {
    setDisplayText(inputValue);
  };

  return (
    <div>
      <h2>Input and Display</h2>
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleShowText}>Show this text on screen</button>
      </div>
      <div>
        <p>{displayText}</p>
      </div>
    </div>
  );
}

export default SimpleInput;