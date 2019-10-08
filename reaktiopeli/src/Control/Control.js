import React from 'react';
import './Control.css'



const Control = (props) => {

    return (
        <div className="ControlMain">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button onClick={props.handlerStart} className='border rounded'>Käynnistä peli</button>
                    </div>
                    <div className="col-sm">
                        <button onClick={props.handlerStop} className='border rounded'>Pysäytä peli</button>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Control