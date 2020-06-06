import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unFollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./users";
import Preloader from "../common/pre-loader";
import {usersAPI} from "../../api/api";

class UsersComponent extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.items);
                    this.props.setUsersTotalCount(response.totalCount);
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.items);
            });

    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,
    setUsersTotalCount, setIsFetching
})(UsersComponent);
