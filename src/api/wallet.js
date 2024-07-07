import {instance} from "./index";
import toast from "../components/modal/toast";
import Toast from "../components/modal/toast";


export const getWallet = async (params) => {
    try {
        const hotelId =  sessionStorage.getItem("hotel-id");
        const response = await instance.get(`/wallets/${hotelId}`, {
            params: params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const Withdrawal= async (amount) => {
    try {
        const hotelId =  sessionStorage.getItem("hotel-id");
        const response = await instance.post(`/wallets/${hotelId}/withdrawal`,
            {"amount": amount});
        Toast({title: "Withdrawal success with " +amount + "VND",type: 'success'})
        return response.data;
    } catch (error) {
        console.log(error)
        Toast({title: error.data.log,  type : 'error'})
    }
}