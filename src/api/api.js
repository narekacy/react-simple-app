import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "be58cf89-0ad7-4185-b9b4-93379678b536"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=
    ${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
};
