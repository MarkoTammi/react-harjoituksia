
import React from 'react'
import './Box.css'

const Box = (props) => {

    return (
        <div className='boxStyle'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Box