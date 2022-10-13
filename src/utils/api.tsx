import axios from 'axios';

const spaceApi = axios.create({
    baseURL: "https://astronomy-database.herokuapp.com/api",
    responseType: 'json',
    withCredentials: true,
});

export default spaceApi;