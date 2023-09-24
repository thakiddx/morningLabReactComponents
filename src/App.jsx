import React from 'react';
import Component1 from './components/Component1/counter';
import './App.css';
import SimpleInput from './components/Component2/simpleInput';
import RandomName from './components/Component3/randomName';
import AddNames from './components/Component4/addNames';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Component1 />
      <SimpleInput />
      <RandomName />
      <AddNames />
      {/* Other components or content */}
    </div>
  );
}

export default App;