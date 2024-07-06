import axios from "axios";
import {instance} from "../api";
export const postCreateRoomTypes = async (data) => {
    const hotelId = localStorage.getItem('hotel-id')

    const response =  await instance.post(`/hotels/${hotelId}/room-types`, data)
    return response.data
}