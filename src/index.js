import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



const App = () => {
  const [counter, setA] = useState(0)
  const handleClick = () => {
    console.log("click.")
    setA(counter + 1)
  }


  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={() => { setA(0) }}>
        clear
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
