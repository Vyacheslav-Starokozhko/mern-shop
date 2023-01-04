import './App.css';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Registration from "./components/registration/registration";


function App() {
    return (
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                </Routes>
            </div>
    );
}

export default App;
