import axios from "axios";
import {instance} from "../api";

export const postCreateRoomTypes = async (data) => {
    return await instance.post(`/hotels//room-types`, data)
}