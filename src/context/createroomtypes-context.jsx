import { createContext, useState } from 'react';
import {CreateRoomTypeDTO} from "../model/CreateRoomTypes/CreateRoomTypeDTO";
export const RoomTypesContext = createContext();

export const RoomTypesProvider = ({ children }) => {
    const [roomTypesInfo, setRoomTypesInfo] = useState(CreateRoomTypeDTO);

    return <RoomTypesContext.Provider value={{ roomTypesInfo, setRoomTypesInfo }}>{children}</RoomTypesContext.Provider>;
};

