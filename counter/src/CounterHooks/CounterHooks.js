import React, {useState} from 'react'
import './CounterHooks.css'

const CounterHooks = () => {

    const [counter, setCounter] = useState(0);

    const handlerPlus = () => {
        setCounter(counter + 1)
    }
    const handlerMiinus = () => {
        if (counter > 0) {setCounter(counter - 1)}
    }
    const handlerReset = () => {
        setCounter(0)
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handlerPlus}>+1</button>
            <button onClick={handlerMiinus}>-1</button>
            <button onClick={handlerReset}>Reset</button>

        </div>
    )
}

export default CounterHooks
