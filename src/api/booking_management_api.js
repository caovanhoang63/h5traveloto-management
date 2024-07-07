import { instance } from "./index";

export const getBookingByHotelId = async (hotelId) => {
    try {
        const response = await instance.get(`/hotels/${hotelId}/bookings/`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const checkInBooking = async (path) => {
    try {
        const response = await instance.patch(
            `/hotels/${path.hotelId}/bookings/${path.bookingId}/check-in`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const checkOutBooking = async (path) => {
    try {
        const response = await instance.patch(
            `/hotels/${path.hotelId}/bookings/${path.bookingId}/check-out`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const chooseRoomBooking = async (data) => {
    try {
        const response = await instance.post(
            `/hotels/${data.hotelId}/bookings/${data.bookingId}/details`,
            data.body
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
