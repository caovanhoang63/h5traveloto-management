import axios from "axios";
import {instance} from "../index";

export const postCreatehotel = async (data) => {
    return await instance.post(`/hotels/`, data)
}