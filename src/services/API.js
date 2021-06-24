import axios from "axios";

let axiosInstanceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

let axiosInstancePosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

let getUsers = () => axiosInstanceUsers();
let getPosts = () => axiosInstancePosts();

export {getUsers, getPosts};