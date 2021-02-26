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

    return (
        <div>
            {value}
            {/*事件处理被定义为function call，这意味着事件处理程序实际上被分配了函数返回的值，而 console.log 的返回值是undefined*/}
            <button onClick={console.log('clicked the button')}>
                button
            </button>

            <button onClick={() => {
                console.log('clicked the button')
                setValue(100)
            }}>
                button
            </button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
