import { API_ROOT } from "../common/constant";
import axios from "axios";

const getToken = () => localStorage.getItem("token");

export const instance = axios.create({
    baseURL: API_ROOT,
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${getToken()}`, // Initial token
        Accept: "application/json",
    },
});

// Axios request interceptor to update token
instance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token')
        // Update Authorization header with the latest token from localStorage

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Axios response interceptor to handle token refresh if needed
instance.interceptors.response.use(
    (response) => {
        // Do something with successful responses
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);
