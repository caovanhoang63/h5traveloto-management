import {instance} from "./index";




export const getReviews = async (params) => {
    const response = await instance.get(
        `/reviews`,
        {
            params: params,
        }
    );
    return response.data;
};
