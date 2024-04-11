// user apis
import {instance} from "./index";

export const Authenticate = async (userLogin)=>
    (await instance.post("/authenticate",userLogin)).data

export const Register = async (userRegister) =>
   ( await instance.post("/register",userRegister)).data

export const RenewToken = async (RefreshToken) => {
    console.log("call")

    return (await instance.post("/renew-token", RefreshToken)).data
}




