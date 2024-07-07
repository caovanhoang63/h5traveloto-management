import {instance} from "./index";

const hotelId = sessionStorage.getItem("hotel-id")
export const getProfile = async (params) => {
    const response = await instance.get(
        `/users/profile`,
        {
            params: params,
        }
    );
    return response.data;
};
//const roomId = "66867ac347a0f0c408503fa8";
//const roomId = "66893228b4e2bc36492c4def";
const roomId = sessionStorage.getItem("room-id")

export const changeProfile = async (data) => {
    try {
        const response = await instance.patch(
            '/users/profile',
            data
        );
        return response.data;
    } catch (error) {
        console.error('Error updating profile:', error);
        // Bạn có thể thêm xử lý lỗi chi tiết hơn ở đây nếu cần
        throw error;
    }
};
