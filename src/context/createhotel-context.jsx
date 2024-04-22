import { createContext, useState } from 'react';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState({
        "name": "Khach san sieu sieu dep",
        "address":"31 Ngo quyen",
        "hotel_type" : "3mHP91UN6pvMwH",
        "province_code" : 1,
        "hotline" : "0896374872",
        "district_code" : 1,
        "ward_code": 1,
        "lat": 20.865139,
        "lng" :	106.683830,
        "star" : 4,
        "logo" : {
            "id": 0,
            "url": "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
            "width": 1000,
            "height": 600,
            "cloud_name": "s3",
            "extension": ".jpg"
        },
        "images" : [
            {
                "id": 0,
                "url": "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
                "width": 1000,
                "height": 600,
                "cloud_name": "s3",
                "extension": ".jpg"
            },
            {
                "id": 0,
                "url": "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
                "width": 1000,
                "height": 600,
                "cloud_name": "s3",
                "extension": ".jpg"
            },
            {
                "id": 0,
                "url": "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
                "width": 1000,
                "height": 600,
                "cloud_name": "s3",
                "extension": ".jpg"
            }
        ],
        "facility_ids" : ["e5CU9Sn7zoTu","gH9tUdUn4t2f","iUwx1atikcbh"],
        "hotel_detail" : {
            "number_of_floor" : 4,
            "distance_to_center_city" : 12,
            "description" : "this is a very big and beutiful hotel",
            "location_detail" : "31 ngo quyen, Doi dien quan 9 6 6 9",
            "check_in_time" : "12:30:00",
            "check_out_time" : "12:30:00",
            "require_document" : true,
            "minimum_age" : 0,
            "cancellation_policy" : 0,
            "smoking_policy" : "free",
            "pet_policy" : "free",
            "additional_policies" : ""
        }
    });

    return <InfoContext.Provider value={{ info, setInfo }}>{children}</InfoContext.Provider>;
};

/*
{
    name: '',
        address: '',
    hotel_type: '',
    province_code: null,
    hotline: '',
    dictrict_code: null,
    ward_code: null,
    lat: 20,
    lng: 20,
    star: null,
    logo : {
    id: 0,
        url: "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
        width: 1000,
        height: 600,
        cloud_name: "s3",
        extension: ".jpg"
},
    images : [
        {
            id: 0,
            url: "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
            width: 1000,
            height: 600,
            cloud_name: "s3",
            extension: ".jpg"
        },
        {
            id: 0,
            url: "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
            width: 1000,
            height: 600,
            cloud_name: "s3",
            extension: ".jpg"
        },
        {
            id: 0,
            url: "https://d3jwhct9rpti9n.cloudfront.net/hotel_images/658799386.jpg",
            width: 1000,
            height: 600,
            cloud_name: "s3",
            extension: ".jpg"
        }
    ],
        facility_ids: [],
    hotel_detail: {
    number_of_floor: null,
        distance_to_center_city: null,
        description: '',
        location_detail: '',
        check_in_time: '',
        check_out_time: '',
        require_document: true,
        minimum_age: null,
        cancellation_policy: null,
        smoking_policy: '',
        pet_policy: '',
        additional_policies: '',
},
}*/
