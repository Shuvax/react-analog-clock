import React, { useState } from 'react';
import './App.css';
import './CustomForm.css';
import { Button, TextField } from '@material-ui/core';

function CustomForm(props) {
    const [options, setOptions] = useState(props.defaultOptions)

    const setHandColor = (event) => {
        event.preventDefault();
        let handColors = { ...options.handColors };
        handColors[event.target.name] = event.target.value;
        setOptions({ ...options, handColors });
    }

    const buildClock = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.updateClock(options);
    }

    return (
        <form>
            <div className='custom-title'>Custom Analog Clock </div>
            <div className='all-hand-color-container'>
                <div className='input-label-container'>
                    <TextField label='Second Hand Color' name='second' type='text' onChange={setHandColor} />
                </div>
                <div className='input-label-container'>
                    <TextField label='Minute Hand Color' name='minute' type='text' onChange={setHandColor} />
                </div>
                <div className='input-label-container'>
                    <TextField label='Hour Hand Color' name='hour' type='text' onChange={setHandColor} />
                </div>
            </div>
            <div className='custom-submit-button'>
                <Button  type='submit' onClick={buildClock}>Submit</Button>
            </div>
        </form>
        

    )
}

export default CustomForm;