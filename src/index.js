import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const History = ({allClicks}) => {
    if (allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    } else {
        return (
            <div>
                button press history: {allClicks.join(' ')}
            </div>
        )
    }
}

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })

    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setClicks({
            ...clicks,
            left: clicks.left + 1
        })
        setAll(allClicks.concat('L'))
    }
    const handleRightClick = () => {
        setClicks({
            ...clicks,
            right: clicks.right + 1
        })
        setAll(allClicks.concat('R'))
    }

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>

            <button onClick={handleRightClick}>right</button>
            {clicks.right}

            <History allClicks={allClicks}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
