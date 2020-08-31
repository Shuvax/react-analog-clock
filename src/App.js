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
        handColors: {
            second: 'green',
            minute: 'blue',
            hour: 'red'
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
                <ClockBase>
                    <Center />
                    <SecondHand fraction={seconds} color={options}/>
                    <MinuteHand fraction={minutes} color={options}/>
                    <HourHand fraction={hours} color={options}/>
                </ClockBase>
            </div>
        </div>

        
    )
}



export default App;