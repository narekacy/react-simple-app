import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?!', likesCount: 12},
    {id: 2, message: 'This is post 2!', likesCount: 11},
    {id: 3, message: 'This is post 3!', likesCount: 11},
    {id: 4, message: 'This is post 4!', likesCount: 11},
];

let dialogs = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Arsen'},
    {id: 3, name: 'Artem'},
    {id: 4, name: 'Edgar'},
    {id: 5, name: 'Dania'},
    {id: 6, name: 'Narek'},
];

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Barev!'},
    {id: 3, message: 'Barev!'},
    {id: 4, message: 'Barev!'},
    {id: 5, message: 'Privet!'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
