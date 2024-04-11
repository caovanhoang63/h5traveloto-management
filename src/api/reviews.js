import {instance} from "./index";




export const listReviews = async (params) => {
    const response = await instance.get(
        `/reviews`,
        {
            params: params,
        }
    );
    return response.data;
};
