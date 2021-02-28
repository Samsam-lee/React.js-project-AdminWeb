import React, { createContext, useState } from 'react'
import io from 'socket.io-client'

const TestContext = createContext(null);

const TestContextProvider = ({ children }) => {

    const initValue = useState(
        // io("http://13.125.69.16",{
        // io("http://192.168.0.41:4000",{
        io("http://172.18.0.2:4000",{
        secure: true,
        reconnect: true,
        rejectUnauthorized: false,
        transports: ['websocket']
    }))

    const [displayBox, setDisplayBox] = useState('none')

    const value = {
        socket: initValue[0],
        displayBox: displayBox,
        setDisplayBox: setDisplayBox
    }

    return (
        <TestContext.Provider value={value}>
            {children}
        </TestContext.Provider>
    )
}

const { Consumer: TestContextConsumer } = TestContext


export {
    TestContextProvider,
    TestContextConsumer
};
export default TestContext;