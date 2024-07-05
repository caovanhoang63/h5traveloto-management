import {instance} from "../index";

export const getWards = async (params) => {
    const response = await instance.get(`/districts/${params}/wards`);
    return response.data;
}
