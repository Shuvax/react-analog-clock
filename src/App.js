import React, { useState } from 'react';
import { useInterval } from './Hook';
import { ClockBase, Center, SecondHand, MinuteHand, HourHand } from './Components';
import CustomForm from './CustomForm';
import './App.css'


const App = () => {
    const date = new Date();
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const [options, setOptions] = useState({
        clockColors: {
            second: 'green',
            minute: 'blue',
            hour: 'red',
            border: 'gray',
            base: 'black',
            center: 'gray'
        }
    })

    const updateClock = (new_options) => {
        setOptions({ ...new_options });
    }


    useInterval(() => {
        setSeconds(date.getSeconds())
        setMinutes(date.getMinutes())
        setHours(date.getHours() % 12 || 12)
    }, 1000 )
    
    return(
        
        <div className='main-container'>
            <h1 className='form-container'>
                <CustomForm defaultOptions={options} updateClock={updateClock} />
            </h1> 
            <div className='clock-container'>
                <ClockBase color={options}>
                    <Center color={options}/>
                    <SecondHand fraction={seconds} color={options}/>
                    <MinuteHand fraction={minutes} color={options}/>
                    <HourHand fraction={hours} color={options}/>
                </ClockBase>
            </div>
        </div>

        
    )
}



export default App;