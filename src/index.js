import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/**
 * Display组件
 * 状态传递给子组件Demo
 * @param {Object} props
 */
const Display = (props) => {
  return (
    <div>
      {props.counter}
    </div>
  )
}

/**
 * Button组件
 *  复用Text 以及 handleClick
 * @param {Object} props 
 */
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [counter, setA] = useState(0)
  const handleClick = () => {
    console.log("click.")
    setA(counter + 1)
  }


  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={handleClick} text="plus" />
      <Button handleClick={() => { setA(0) }} text="clear" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
