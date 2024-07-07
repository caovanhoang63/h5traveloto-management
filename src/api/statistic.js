import {instance} from "./index";

export const overViewBooking = async (params) => {
    try {
        const response = await instance.get("hotels/3mHP8w3u35tRZZ/bookings/overview", {
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const roomStatusStatistic = async (params) => {
    try {
        const response = await instance.get("hotels/3mHP8w3u35tRZZ/bookings/room-status", {
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

