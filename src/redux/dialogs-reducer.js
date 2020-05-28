const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Karen'},
        {id: 2, name: 'Arsen'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Edgar'},
        {id: 5, name: 'Dania'},
        {id: 6, name: 'Narek'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Barev!'},
        {id: 3, message: 'Barev!'},
        {id: 4, message: 'Barev!'},
        {id: 5, message: 'Privet!'},
    ],
    newMessagesBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let message = state.newMessageBody;
            console.log(state)
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: message}],
                newMessageBody: '',
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;