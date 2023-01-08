import './App.css';
import React, {useEffect} from "react";
import Navbar from "./components/navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import Registration from "./components/autorithation/Registration";
import Login from "./components/autorithation/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";
import Disk from "./components/Disk/Disk";


function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth());
    }, [])
    return (
        <div className="App">
            <Navbar/>
            {!isAuth ?
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                :
                <Routes>
                    <Route path="/" element={<Disk/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            }

        </div>
    );
}

export default App;
