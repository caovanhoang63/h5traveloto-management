import axios from "axios";
import {instance} from "../index";

export const postCreatehotel = async (data) => {
    const response = await instance.post(`/hotels/`, data)
    return response.data
}

