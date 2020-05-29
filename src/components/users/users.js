import React from "react";
import defaultAvatar from "../../assets/images/default-avatar.png";
import s from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u =>
                            <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : defaultAvatar}
                                 className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div>
                        </span>
                    </span>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Users;