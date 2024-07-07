import {instance} from "./index";

export const overViewBooking = async (params) => {
    try {
        const hotelId = sessionStorage.getItem("hotel-id")

        const response = await instance.get(`hotels/${hotelId}/bookings/overview`, {
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const roomStatusStatistic = async (params) => {
    try {
        const hotelId = sessionStorage.getItem("hotel-id")

        const response = await instance.get(`hotels/${hotelId}/bookings/room-status`, {
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const occupancyStatistic = async (params) => {
    try {
        const hotelId = sessionStorage.getItem("hotel-id")

        const response = await instance.get(`hotels/${hotelId}/bookings/occupancy-statistic`, {
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


