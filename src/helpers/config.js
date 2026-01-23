import axios from "axios";


export const axiosRequest = axios.create({
    baseURL: 'http://e-commerce-laravel.test/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }   
})