import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);


    return (
        <div>
            {left}
            <button onClick={() => setLeft(left + 1)}>left</button>

            <button onClick={() => setRight(right + 1)}>right</button>
            {right}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
