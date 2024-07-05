import {instance} from "../index";

export const getProvinces = async () => {
    const response = await instance.get(
        `/provinces`,
    );
    return response.data;
};