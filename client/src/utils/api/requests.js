import axios from 'axios';

const BASE_URL = "https://ecommerce-customized.herokuapp.com";


export const apiRequest = axios.create({
    baseURL: BASE_URL
})