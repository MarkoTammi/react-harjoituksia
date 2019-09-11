
import React from 'react'
import './Box.css'

const Box = (props) => {

    return (
        <div className='boxStyle col-sm'>
            <p>Name: {props.name}</p>
            <p>Title: {props.title}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Box