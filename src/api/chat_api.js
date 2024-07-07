import {instance} from "./index";

const hotelId = sessionStorage.getItem("hotel-id")
//const hotelId = "iUwqQA5kiz97";
//const hotelId = "3mHP8w3u35tRZZ";

export const getHotelChats = async (params) => {
    const hotelId = sessionStorage.getItem("hotel-id")
    console.log(hotelId)
    const response = await instance.get(
        `/hotels/${hotelId}/chat/`,
        {
            params: params,
        }
    );
    return response.data;
};
//const roomId = "66867ac347a0f0c408503fa8";
//const roomId = "66893228b4e2bc36492c4def";
const roomId = sessionStorage.getItem("room-id")

export const getListChatByRoomId = async (params) => {
    const roomId = sessionStorage.getItem("room-id")
    console.log(roomId)
    const response = await instance.get(
        `/chat/rooms/${roomId}/messages`,
        {
            params: params,
        }
    );
    return response.data;
};
