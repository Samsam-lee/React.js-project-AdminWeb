import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Routes/Root";
import { TestContextProvider } from "./utils/TestContextProvider";

ReactDOM.render(
    <TestContextProvider>
        <Root />
    </TestContextProvider>,
    document.getElementById("root")
);