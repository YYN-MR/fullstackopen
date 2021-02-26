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
    //返回函数的函数可用于定义可以使用参数自定义的通用函数。 可以将创建事件处理程序的 hello 函数视为一个生成用户的定制事件处理的工厂。
    const hello = (who) => () => {
        console.log('hello ', who)
        setValue(value + 1)
    }
    return (
        <div>
            {value}
            {/*函数调用的返回值是函数,此时函数调用会起作用*/}
            <button onClick={hello('Sky')}>button</button>
            <button onClick={hello('function')}>button</button>
            <button onClick={hello('react')}>button</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
