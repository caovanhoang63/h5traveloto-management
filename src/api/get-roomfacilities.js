import {instance} from "./index";

export const getRoomFacilities = async () => {
    const response = await instance.get(
        `/rooms/facilities/`,
    );
    return response.data;
};