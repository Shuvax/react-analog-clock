import React, { useState } from 'react';
import './App.css';
import './CustomForm.css';;

function CustomForm(props) {
    const [options, setOptions] = useState(props.defaultOptions)

    const setClockColor = (event) => {
        event.preventDefault();
        let clockColors = { ...options.clockColors };
        clockColors[event.target.name] = event.target.value;
        setOptions({ ...options, clockColors });
    }

    const buildClock = (event) => {
        event.preventDefault();
        /*setTimeout(() => props.updateClock(options), 1000);*/
        props.updateClock(options);
    }

    return (
        <form onSubmit={(event) => buildClock(event)}>
            <div className='custom-title'>Custom Analog Clock </div>
            <div className='all-hand-color-container'>
                <div className='input-label-container'>
                    <input className='color-input' placeholder='Second-color' label='Second Hand Color' name='second' type='text' onChange={setClockColor} />
                </div>
                <div className='input-label-container'>
                    <input className='color-input' placeholder='Minute-color' label='Minute Hand Color' name='minute' type='text' onChange={setClockColor} />
                </div>
                <div className='input-label-container'>
                    <input className='color-input' placeholder='Hour-color' label='Hour Hand Color' name='hour' type='text' onChange={setClockColor} />
                </div>
                <div className='input-label-container'>
                    <input className='color-input' placeholder='Border-color' label='Border Color' name='border' type='text' onChange={setClockColor} />
                </div>
                <div className='input-label-container'>
                    <input className='color-input' placeholder='Base-color' label='Base Color' name='base' type='text' onChange={setClockColor} />
                </div>
                <div className='input-label-container'>
                    <input className='color-input' placeholder='Center-color' label='Center Color' name='center' type='text' onChange={setClockColor} />
                </div>
            </div>
            <div className='custom-submit-button-container'>
                <button  className='custom-submit-button' type='submit'>Submit</button>
            </div>
        </form>
        

    )
}

export default CustomForm;