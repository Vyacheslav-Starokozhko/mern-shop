import './App.css';
import React, {useEffect} from "react";
import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Registration from "./components/autorithation/registration";
import Login from "./components/autorithation/login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";


function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(auth());
    }, [])
    return (
        <div className="App">
            <Navbar/>
            {!isAuth && <Routes>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            }

        </div>
    );
}

export default App;
