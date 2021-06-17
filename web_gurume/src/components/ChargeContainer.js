import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './ChargeContainer.css'

const ChargeContainer = (props) => {
    return (
        <>
        <ProgressBar animated now={props.percent*10} label={props.percent*10}/>
        </>
    )
}

export default ChargeContainer
