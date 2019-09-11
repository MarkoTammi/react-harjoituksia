import React from 'react';
import './Control.css'


const Control = () => {

    return (
        <div className="ControlMain">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button className='border rounded'>Käynnistä peli</button>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label className="form-check-label">Vakionopeus</label>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label className="form-check-label">Kiihtyvä nopeus</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Control