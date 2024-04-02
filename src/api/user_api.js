// user apis
import {instance} from "./index";

export const authenticate = async (userLogin)=>
    instance.post("/authenticate",userLogin)

export const register = async (userRegister) =>
    instance.post("/register",userRegister)