import React from "react";
import "./app.less"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";

const App = () => {
    //debugger;
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </ BrowserRouter>
    );
}

export default App;