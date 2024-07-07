import {instance} from "./index";

export const getWorker = async (params) => {
    const hotelId = sessionStorage.getItem("hotel-id")
    try{

    const response = await instance.get(
        `/hotels/${hotelId}/workers/`,
        {
            params: params,
        }
    );
    return response.data;
    }catch(error){
        console.error(error);
    }
};