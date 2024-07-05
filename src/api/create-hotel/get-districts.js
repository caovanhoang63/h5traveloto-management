import {instance} from "../index";
const province = '01';
export const getDistricts = async (params) => {
    const response = await instance.get(
        `/provinces/${params}/districts`,

    );
    return response.data;
}
