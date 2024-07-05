import { instance } from "./index";

export const getBookingByHotelId = async (hotelId) => {
    try {
        const response = await instance.get(`/hotels/${hotelId}/bookings`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
