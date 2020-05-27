import React from "react";
import s from './dialogs.module.css';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder="enter your message"/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;