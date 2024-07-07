import { instance } from "./index";

const convertParams = (params) => {
    return {
        adults: params.adults,
        children: params.children,
        room_quantity: params.room_quantity,
        start_date: convertDate(params.start_date),
        end_date: convertDate(params.end_date),
        hotel_id: `"${params.hotel_id}"`,
    };
};

//convert date format to dd/mm/yyyy ex: 01/01/2021
const convertDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const day = d.getDate().toString().padStart(2, "0");
    return `"${day}-${month}-${year}"`;
};

export const searchRoomTypes = async (params) => {
    try {
        console.log(params);
        console.log(convertParams(params));
        const response = await instance.get("/search/room-types/", {
            params: convertParams(params),
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
