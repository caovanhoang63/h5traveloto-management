import {API_ROOT} from "../common/constant";
import axios from "axios";

// Set config defaults when creating the instance
const token = localStorage.getItem('token');

export const instance = axios.create({
    baseURL: API_ROOT,
    timeout: 5000,
    headers :  {
        "Authorization" : `Bearer ${token}`,
        "Accept" : 'application/json',
    }

});

// Alter defaults after instance has been created




