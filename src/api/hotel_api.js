import {instance} from "./index";


export const GetCurrentHotel = async (data) => {
    try {
        const response = await instance.get(
            '/hotels/current',
            data
        );
        return response.data;
    } catch (error) {
        console.error('Error updating profile:', error);
        // Bạn có thể thêm xử lý lỗi chi tiết hơn ở đây nếu cần
        throw error;
    }
};