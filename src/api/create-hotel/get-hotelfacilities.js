import {instance} from "../index";

export const getHotelfacilities = async () => {
    const response = await instance.get(
        `/hotels/facilities/`,
    );
    return response.data;
};