import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Routes/Root'
import { TestContextProvider} from './utils/TestContextProvider'

// const socket = io("http://192.168.0.43:4000",{
//     secure: true,
//     reconnect: true,
//     rejectUnauthorized: false,
//     transports: ['websocket']
// })

// socket.on('first', msg => {
//     console.log(msg)
// })

// socket.emit('givedata', 'hihi')

ReactDOM.render(<TestContextProvider><Root /></TestContextProvider>, document.getElementById('root'))

