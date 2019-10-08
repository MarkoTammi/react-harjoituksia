import React from 'react';
import './Circles.css';



const Circles = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div value='circle1' onClick={props.handlerCircleClicks} className={props.circle1State === 'off' ? "Circle col-sm border rounded-circle CircleOff" : "Circle col-sm border rounded-circle CircleOn"} ></div>
                <div onClick={props.handlerCircleClicks} className={props.circle2State === 'off' ? "Circle col-sm border rounded-circle CircleOff" : "Circle col-sm border rounded-circle CircleOn"}></div>
                <div onClick={props.handlerCircleClicks} className={props.circle3State === 'off' ? "Circle col-sm border rounded-circle CircleOff" : "Circle col-sm border rounded-circle CircleOn"}></div>
            </div>
        </div>
    )
}



export default Circles