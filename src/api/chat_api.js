import {instance} from "./index";

// const hotelId = localStorage.getItem("hotel-id")
const hotelId = "iUwqQA5kiz97";

export const getHotelChats = async (params) => {
    const response = await instance.get(
        `/hotels/${hotelId}/chat/`,
        {
            params: params,
        }
    );
    return response.data;
};
