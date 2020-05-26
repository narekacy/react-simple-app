const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?!', likesCount: 12},
                {id: 2, message: 'This is post 2!', likesCount: 11},
                {id: 3, message: 'This is post 3!', likesCount: 11},
                {id: 4, message: 'This is post 4!', likesCount: 11},
            ],
            newPostText: 'some-text',
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {},
    getState() {return this._state},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let message = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({ id: 6, message: message });
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;