import React from "react";
import s from './dialogs.module.css';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.state.messages.map(m => <Message message={m.message} />);

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