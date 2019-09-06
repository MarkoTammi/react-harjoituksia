import React from 'react';
import './Main.css'
import Box from '../Box/Box';

const handleOnClick = () => {
    console.log('clicked')
}

const name = ''
const age = ''

const Main = (props) => {
    return (
        <div className='mainStyle'>
            <div>{props.text}</div>
            <button onClick={handleOnClick}>Click me</button>
            <Box name={name} age={age} />
            <Box name={name} age={age} />
            <Box name={name} age={age} />
        </div>
    )
}


export default Main;