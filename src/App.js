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
                        <Dialogs dialogs={props.dialogs} messages={props.messages}/> } />
                    <Route path='/profile' render={() =>
                        <Profile posts={props.posts}/> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
