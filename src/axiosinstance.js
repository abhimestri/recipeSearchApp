import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://recipe-search-app-ebd5f.firebaseio.com/'
});

export default instance