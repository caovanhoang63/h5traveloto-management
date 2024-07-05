import { instance } from "./index";

export const getRoomTypesByHotelId = async (params) => {
    try {
        const response = await instance.get("/room-types", {
            params: params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
