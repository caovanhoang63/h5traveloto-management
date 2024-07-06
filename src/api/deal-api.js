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
