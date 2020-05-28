import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogs-container";
import UsersContainer from "./components/users/users-container";

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
                    <Route path='/users' render={() =>
                        <UsersContainer /> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
