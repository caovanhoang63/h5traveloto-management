import {instance} from "./index";

// const hotelId = localStorage.getItem("hotel-id")
const hotelId  = "3mKb6KGah2LTST"


export const getRooms = async (params)=>
{
    const  response =  await instance.get(`/hotels/${hotelId}/rooms?hotel-id="${hotelId}"`,{
        params : params
    })
    return response.data
}


