import React, { createContext, useState } from 'react'

const TestContext = createContext("");

const TestContextProvider = ({ children }) => {

    const [initValue, setInitValue] = useState('1111')

    const value = {
        state: { initValue },
        actions: { setInitValue }
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