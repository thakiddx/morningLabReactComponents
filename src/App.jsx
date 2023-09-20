import React, { useState } from 'react'
import './App.css'
import Counter from './components/Component1/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>React MorningLab Components</h1>
        <Counter count={count} />  
        </div>
  );
}

export default App
q