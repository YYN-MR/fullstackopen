import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Display = props => <div>{props.value}</div>

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
