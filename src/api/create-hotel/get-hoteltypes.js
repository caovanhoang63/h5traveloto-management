import {instance} from "../index";

export const getHoteltypes = async () => {
    const response = await instance.get(
        `/hotel-types/`,
    );
    return response.data;
};