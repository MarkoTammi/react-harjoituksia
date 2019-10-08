import React from 'react';
import './Points.css';



const Points = (props) => {

    return (
        <div className="PointsMain">
            <h2>{props.counter}</h2>
        </div>
    )
}



export default Points