import React from "react";
import s from "./users.module.css";

let Users = (props) => {

    if(props.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg',
                    followed: false,
                    fullName: 'Karen',
                    status: 'boss',
                    location: {city: 'Cherkassy', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg',
                    followed: true,
                    fullName: 'Arsen',
                    status: 'boss',
                    location: {city: 'Lutsk', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg',
                    followed: false,
                    fullName: 'Artem',
                    status: 'boss',
                    location: {city: 'Munchen', country: 'Germany'}
                },
                {
                    id: 4,
                    photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg',
                    followed: true,
                    fullName: 'Dania',
                    status: 'boss',
                    location: {city: 'Lutsk', country: 'Ukraine'}
                },
                {
                    id: 5,
                    photoURL: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2b/2bcb2def5dbdec4116787580334bee07f1191601_full.jpg',
                    followed: false,
                    fullName: 'Edgar',
                    status: 'boss',
                    location: {city: 'Tbilisi', country: 'Georgia'}
                },
            ],
        );
    }

    return (
        props.users.map(u =>
            <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoURL} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>
        )
    )
};

export default Users;