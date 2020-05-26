import profileReducer from "./profile-reducer";
import dialogsReducer from "./sidebar-reducer";

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
        },
        sidebar: {}
    },
    _callSubscriber() {},
    getState() {return this._state},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = dialogsReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;