import React from "react";
import s from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Karen'},
        {id: 2, name: 'Arsen'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Edgar'},
        {id: 5, name: 'Dania'},
        {id: 6, name: 'Narek'},
    ];

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Barev!'},
        {id: 3, message: 'Barev!'},
        {id: 4, message: 'Barev!'},
        {id: 5, message: 'Privet!'},
    ];

    let messagesElement = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

export default Dialogs;