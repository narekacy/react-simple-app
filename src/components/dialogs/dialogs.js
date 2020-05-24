import React from "react";
import s from './dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Karen
                </div>
                <div className={s.dialog}>
                    Arsen
                </div>
                <div className={s.dialog}>
                    Artem
                </div>
                <div className={s.dialog}>
                    Edgar
                </div>
                <div className={s.dialog}>
                    Dania
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Barev!</div>
                <div className={s.message}>Privet!</div>
            </div>
        </div>
    );
};

export default Dialogs;