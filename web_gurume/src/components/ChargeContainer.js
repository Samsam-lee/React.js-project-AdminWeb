import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ChargeContainer.css'

const ChargeContainer = (props) => {
    return (
        <>
        <ProgressBar animated now={props.percent} label={props.percent+'%'}/>
        </>
    )
}

export default ChargeContainer
