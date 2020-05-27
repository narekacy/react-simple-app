import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogs-container";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer /> } />
                    <Route path='/profile' render={() =>
                        <Profile /> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
