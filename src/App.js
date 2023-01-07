import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);
  return (
    <div className="counterWrapper">
      <div className="counterDisplay">
        {count}
      </div>
      <div className="counterButtons">
        <div onClick={() => setCount(count+1)} className="counterButton">
          +
        </div>
        <div onClick={() => setCount(count-1)} className="counterButton">
          -
        </div>
        <div onClick={() => setCount(count+5)} className="counterButton">
          Increment by 5
        </div>
      </div>
    </div>
  );
}

export default App;
