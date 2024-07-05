import { createContext, useState } from 'react';
import {createHotelDTO} from "../model/CreateHotelDTO/CreateHotelDTO";
export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState(createHotelDTO);

    return <InfoContext.Provider value={{ info, setInfo }}>{children}</InfoContext.Provider>;
};

