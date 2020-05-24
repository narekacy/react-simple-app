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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Karen" id="1"/>
                <DialogItem name="Arsen" id="2"/>
                <DialogItem name="Artem" id="3"/>
                <DialogItem name="Edgar" id="4"/>
                <DialogItem name="Dania" id="5"/>
                <DialogItem name="Narek" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Barev!"/>
                <Message message="Barev!"/>
                <Message message="Barev!"/>
                <Message message="Privet!"/>
            </div>
        </div>
    );
};

export default Dialogs;