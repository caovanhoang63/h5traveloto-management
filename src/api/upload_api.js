import {instance} from "./index";

export const Upload = async (formData) =>
     (await instance.post("/upload", formData)).data



