import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogs-container";
import UsersContainer from "./components/users/users-container";
import ProfileContainer from "./components/profile/profile-container";
import HeaderContainer from "./components/header/header-container";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer /> } />
                    <Route exact path='/profile/:userId?' render={() =>
                        <ProfileContainer /> } />
                    <Route path='/users' render={() =>
                        <UsersContainer /> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
