import React from "react";
import "./app.less"
import {useDispatch} from "react-redux";
import { setCount } from "../reducers/reposReducer";
import { useSelector } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=>state.repos.count);

    function onCountClick () {
        dispatch(setCount(5));
    }

    return (
        <div className="app"> 
            <button onClick={()=>onCountClick()}>Count</button>
            <div>{count}</div>
        </div>
    );
}

export default App;