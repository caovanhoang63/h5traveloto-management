import { createContext, useState } from 'react';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState({
        name: '',
        address: '',
        hotel_type: '',
        province_code: null,
        hotline: '',
        dictrict_code: null,
        ward_code: null,
        lat: null,
        lng: null,
        star: null,
        facility_ids: [],
        hotel_detail: {
            number_of_floor: null,
            distance_to_center_city: null,
            description: '',
            location_detail: '',
            check_in_time: '',
            check_out_time: '',
            require_document: null,
            minimun_age: null,
            cancellation_policy: null,
            smoking_policy: '',
            pet_policy: '',
            additional_policies: '',
        },
    });

    return <InfoContext.Provider value={{ info, setInfo }}>{children}</InfoContext.Provider>;
};