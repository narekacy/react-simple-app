const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg', followed: false, fullName: 'Karen', status: 'boss', location: {city: 'Cherkassy', country: 'Ukraine'}},
        {id: 2, photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg', followed: true, fullName: 'Arsen', status: 'boss', location: {city: 'Lutsk', country: 'Ukraine'}},
        {id: 3, photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg', followed: false, fullName: 'Artem', status: 'boss', location: {city: 'Munchen', country: 'Germany'}},
        {id: 4, photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg', followed: true, fullName: 'Dania', status: 'boss', location: {city: 'Lutsk', country: 'Ukraine'}},
        {id: 5, photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg', followed: false, fullName: 'Edgar', status: 'boss', location: {city: 'Tbilisi', country: 'Georgia'}},
    ],
    newPostText: 'some-text',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: { ...state.users, ...action.users }};
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;