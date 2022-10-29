import React from 'react';
import "./progressbar.css"

const ProgressBar = (props) => {
    return (
        <div className='progress-component'>
            <div>
                {props.data}%
            </div>
            <div className='container'>
                <div className='barra'>
                    <div className='preenchimento'
                        style={{ width: String(props.data) + "%" }}>

                    </div>
                </div>
                <div className='stack'>
                    {props.stack}
                </div>
            </div>
        </div>

    );
}
export default ProgressBar;