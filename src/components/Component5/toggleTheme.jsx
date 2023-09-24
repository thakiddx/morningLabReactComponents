import React, { useState } from 'react';

function ToggleTheme() {
  const [theme, setTheme] = useState('light');

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <div>
      <h2>Toggle Theme</h2>
      <button onClick={handleToggle}>Toggle Theme</button>
      <div className={themeClass}>
        <p>This is a themed div.</p>
      </div>
    </div>
  );
}

export default ToggleTheme;