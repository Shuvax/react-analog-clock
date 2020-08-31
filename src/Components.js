import styled from 'styled-components';
import './App.css'

const getAngle = (fraction, factor=6) => (270 + (fraction * factor))

const BaseHand = styled.div`
    position: relative;
    top: 50%;
`

export const ClockBase = styled.div`
    position: relative;
    border: 10px solid gray;
    width: 50%;
    height: 50%;
    margin: 0 auto;
    background-color: black;
    border-radius: 100%;
    @media only screen and (orientation : landscape) {
        width: 50vh;
        height: 50vh;
    }
`

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border: 2px solid #fff;
    background-color: gray;
    border-radius: 100%;
    z-index: 100;
`

export const SecondHand = styled(BaseHand)`
    left: 40%;
    outline: ${props => props.color.handColors.second? '2px solid ' + props.color.handColors.second : '2px solid gray'};
    width: 60%;
    transform-origin: 17%;
    transform: rotate(${props => getAngle(props.fraction)}deg);
    transition: ${props => props.fraction > 0 ? 'transform 250ms ease-in-out' : 'none'};
`

export const MinuteHand = styled(BaseHand)`
    left: 45%;
    outline: ${props => props.color.handColors.minute? '2px solid ' + props.color.handColors.minute : '2px solid gray'};
    width: 50%;
    transform-origin: 10%;
    transform: rotate(${props => getAngle(props.fraction)}deg)
`


export const HourHand = styled(BaseHand)`
    left: 45%;
    outline: ${props => props.color.handColors.hour? '2px solid ' + props.color.handColors.hour : '2px solid gray'};
    width: 35%;
    transform-origin: 14%;
    transform: rotate(${props => getAngle(props.fraction, 30)}deg)
`
