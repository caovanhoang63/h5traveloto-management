import {instance} from "./index";

export const listReviews = async (params) => {
    try {
        const response = await instance.get(
            `/reviews`,
            {
                params: params,
            }
        );
        return response.data;
    } catch {
        throw new Error("have no reviews")
    } finally {
        console.log("")
    }
};
