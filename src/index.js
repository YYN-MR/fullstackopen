import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


/**
 * App 应用启动组件
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    const [value, setValue] = useState(10)
    const hello = () => {
        return () => {
            console.log('hello world')
            setValue(value + 1)
        }
    }
    return (
        <div>
            {value}
            {/*函数调用的返回值是函数,此时函数调用会起作用*/}
            <button onClick={hello()}>button</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
