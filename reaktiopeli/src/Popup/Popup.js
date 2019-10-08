import React from 'react'
import './Popup.css'


const Popup = (props) => {

    if (props.endPopup === 'off'){
        return null
    } else {
        return(
            <div className='popUpWindow'>
                <button className='closeButton' onClick={props.handlerClose}>Sulje</button>
                <h5>Pistemääräsi</h5>
                <h2>{props.counter}</h2>
            </div>
        )

    }

}

export default Popup