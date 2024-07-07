import { instance } from "./index";

export const getDealsByHotelId = async (params) => {
    try {
        const response = await instance.get("/deals/", {
            params: params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const createDeal = async (data) => {
    const hotelId = localStorage.getItem('hotel-id')
    try {
        const response = await instance.post(
            `/hotels/${hotelId}/deals/`,
            data)
        return response.data
    }catch(error) {
        console.error(error);
    }
}
