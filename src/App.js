import React from 'react';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={props.state.dialogsPage}/> } />
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage}/> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
