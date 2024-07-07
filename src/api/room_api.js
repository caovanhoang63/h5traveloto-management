import { instance } from "./index";

export const getRoomByHotelId = async (params) => {
    try {
        const hotelId = sessionStorage.getItem("hotel-id");
        const response = await instance.get(`/hotels/${hotelId}/rooms`, {
            params: params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createRoom = async (data) => {
    try {
        const response = await instance.post(
            `/hotels/${data.path}/rooms/`,
            data.body
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
