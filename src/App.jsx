import React from 'react';
import Component1 from './components/Component1/counter';
import './App.css';
import SimpleInput from './components/Component2/simpleInput';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Component1 />
      <SimpleInput />
      {/* Other components or content */}
    </div>
  );
}

export default App;