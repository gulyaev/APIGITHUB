import React from "react";
import "./app.less"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/Card";
import Error from "./main/Error";

const App = () => {
    //debugger;
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/card/:username/:reponame" element={<Card />} />
                        <Route path="/error" element={<Error />} />
                        <Route path="*" element={<Navigate to ="/" />}/>
                </Routes>
            </div>
        </ BrowserRouter>
    );
}

export default App;