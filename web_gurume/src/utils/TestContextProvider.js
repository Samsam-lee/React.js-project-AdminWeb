import React, { createContext, useState, useMemo, useEffect } from 'react'
import io from 'socket.io-client'

const TestContext = createContext(null);

const TestContextProvider = ({ children }) => {

    const [initValue, setInitValue] = useState(null)

    const [displayBox, setDisplayBox] = useState('none')
    const [errorvideo, setErrorvideo] = useState()
    const [errVideo, setErrVideo] = useState()

    const [chargeThing, setChargeThing] = useState()

    const value = {
        socket: (initValue ? initValue : null),
        displayBox: displayBox,
        setDisplayBox: setDisplayBox,
        // errorvideo: useMemo(() => ({errorvideo}), [errorvideo]),
        errorvideo: errorvideo,
        errVideo: useMemo(() => ({errVideo}), [errVideo]),
        chargeThing: chargeThing,
    }
    
    useEffect(() => {
        setInitValue(
            io("http://13.125.69.16",{
            secure: true,
            reconnect: true,
            rejectUnauthorized: false,
            transports: ['websocket']
        }))
    }, [])

    useEffect(() => {
        if(!initValue) return ; 
        initValue.on('result', argErr => {
            console.log(argErr)
            setErrorvideo(argErr)
        })
    
        // initValue.on('errVideo', errVideo => {
        //     console.log(errVideo)
        //     setErrVideo(errVideo)
        // })

        // socket test
        initValue.on('test', temp => {
            setChargeThing(temp)
            console.log(temp)
        })
    
        initValue.on('start', adminJoin => {
            console.log(adminJoin)
        })
    }, [initValue])
    
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