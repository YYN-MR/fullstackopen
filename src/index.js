import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)
/**
 * App 应用启动组件
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    const [value, setValue] = useState(10)
    const setToValue = (newValue) => {
        setValue(newValue)
    }
    // Do not define components inside another component
    //最大的问题是React 在每次渲染时，会将内部的组件当作一个新的组件。这回导致React 无法去优化组件。
    const Display = props => <div>{props.value}</div>
    return (
        <div>
            <Display value={value}/>
            <Button handleClick={() => setToValue(1000)} text='thousand'/>
            <Button handleClick={() => setToValue(0)} text='reset'/>
            <Button handleClick={() => setToValue(value + 1)} text='increment'/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
