let rerenderEntireTree = () => {

};

let state = {
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
    }
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;