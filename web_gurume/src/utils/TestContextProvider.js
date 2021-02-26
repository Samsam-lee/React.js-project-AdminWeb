import React, { createContext, useState } from 'react'
import io from 'socket.io-client'

const TestContext = createContext(null);

const TestContextProvider = ({ children }) => {

    const initValue = useState(
        io("http://192.168.0.43:4000",{
        secure: true,
        reconnect: true,
        rejectUnauthorized: false,
        transports: ['websocket']
    }))

    const value = {
        socket: initValue
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