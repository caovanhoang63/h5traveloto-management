import { instance } from "./index";

export const getRoomByHotelId = async (params) => {
    try {
        const response = await instance.get("/hotels/gGzTBURqhajF/rooms", {
            params: params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
