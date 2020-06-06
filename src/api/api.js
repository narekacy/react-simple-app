import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "556dca5c-717c-46e3-8369-1081d791de44"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=
    ${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};
