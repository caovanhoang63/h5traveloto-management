import FacilitiesProperty from "../../../components/facilities property/facilities-property";
import "./ch-property-facilities.css";

const CH_PropertyFacilities = () => {
    const facility_data = {
      "data": [
        {
          "id": "e5CU7xaiv1P1",
          "status": 1,
          "created_at": "2024-03-24T12:47:34+07:00",
          "updated_at": "2024-03-24T12:47:34+07:00",
          "name": "common",
          "name_en": "Common",
          "name_vn": "Tiện ích chung",
          "facilities": [
            {
              "id": "e5CU9Sn7zoTu",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "parking_area",
              "name_en": "Parking Area",
              "name_vn": "Bãi đậu xe",
              "description_en": "Has parking area",
              "description_vn": "Có vị trí đỗ xe"
            },
            {
              "id": "gH9tUdUn4t2f",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "room_service",
              "name_en": "Room Service",
              "name_vn": "Dịch vụ phòng",
              "description_en": "Room service available",
              "description_vn": "Có dịch vụ phòng"
            },
            {
              "id": "iUwx1atikcbh",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "safety_deposit_box",
              "name_en": "Safety Deposit Box",
              "name_vn": "Két an toàn",
              "description_en": "Has safety deposit box",
              "description_vn": "Có két an toàn"
            },
            {
              "id": "3mHP93eqz2SubT",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "wifi_public_area",
              "name_en": "Wifi Public Area",
              "name_vn": "Wifi khu vực công cộng",
              "description_en": "Offers wifi in public areas",
              "description_vn": "Cung cấp wifi tại khu vực công cộng"
            },
            {
              "id": "3mKb6RsXkFbtoB",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "coffee_shop",
              "name_en": "Coffee Shop",
              "name_vn": "Quán cà phê",
              "description_en": "Has a coffee shop",
              "description_vn": "Có quán cà phê"
            },
            {
              "id": "3mMo3rDCJw9SSB",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "restaurant",
              "name_en": "Restaurant",
              "name_vn": "Nhà hàng",
              "description_en": "Has a restaurant",
              "description_vn": "Có nhà hàng"
            },
            {
              "id": "3mPHrixTPSFZn3",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "coffee_or_tea_in_lobby",
              "name_en": "Coffee Or Tea In Lobby",
              "name_vn": "Cà phê hoặc trà tại sảnh",
              "description_en": "Offers coffee or tea in the lobby",
              "description_vn": "Cung cấp cà phê hoặc trà tại sảnh"
            },
            {
              "id": "3pZ7NCDcjURB2X",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "elevator",
              "name_en": "Elevator",
              "name_vn": "Thang máy",
              "description_en": "Has an elevator",
              "description_vn": "Có thang máy"
            },
            {
              "id": "3pbKAHs55r1ztM",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "restaurant_for_breakfast",
              "name_en": "Restaurant For Breakfast",
              "name_vn": "Nhà hàng phục vụ bữa sáng",
              "description_en": "Has a restaurant that serves breakfast",
              "description_vn": "Có nhà hàng phục vụ bữa sáng"
            },
            {
              "id": "3pcoyAcLGdqQGq",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "restaurant_for_lunch",
              "name_en": "Restaurant For Lunch",
              "name_vn": "Nhà hàng phục vụ bữa trưa",
              "description_en": "Has a restaurant that serves lunch",
              "description_vn": "Có nhà hàng phục vụ bữa trưa"
            },
            {
              "id": "3pf1vawWyHuUmM",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "restaurant_for_dinner",
              "name_en": "Restaurant For Dinner",
              "name_vn": "Nhà hàng phục vụ bữa tối",
              "description_en": "Has a restaurant that serves dinner",
              "description_vn": "Có nhà hàng phục vụ bữa tối"
            },
            {
              "id": "3spqS4DA56Fuaj",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "late_checkout",
              "name_en": "Late Checkout",
              "name_vn": "Trả phòng muộn",
              "description_en": "Offers late checkout",
              "description_vn": "Cho phép trả phòng muộn"
            },
            {
              "id": "3srLEy4vCJzj43",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "early_checkin",
              "name_en": "Early Checkin",
              "name_vn": "Nhận phòng sớm",
              "description_en": "Offers early check-in",
              "description_vn": "Cho phép nhận phòng sớm"
            }
          ]
        },
        {
          "id": "gH9tTd37kbmR",
          "status": 1,
          "created_at": "2024-03-24T12:47:34+07:00",
          "updated_at": "2024-03-24T12:47:34+07:00",
          "name": "accessibility",
          "name_en": "Accessibility",
          "name_vn": "Tiện ích tiếp cận",
          "facilities": [
            {
              "id": "3stYCMJ5iGuaZb",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "accessible_bathroom",
              "name_en": "Accessible Bathroom",
              "name_vn": "Phòng tắm dễ tiếp cận",
              "description_en": "Offers accessible bathrooms",
              "description_vn": "Có phòng tắm dễ tiếp cận"
            },
            {
              "id": "3w4MYVs2r18nkh",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "accessible_parking",
              "name_en": "Accessible Parking",
              "name_vn": "Bãi đậu xe dễ tiếp cận",
              "description_en": "Offers accessible parking",
              "description_vn": "Có bãi đậu xe dễ tiếp cận"
            },
            {
              "id": "3w5rMQio5XzsDq",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "accessible_path_of_travel",
              "name_en": "Accessible Path Of Travel",
              "name_vn": "Lối đi dễ tiếp cận",
              "description_en": "Offers accessible paths of travel",
              "description_vn": "Có lối đi dễ tiếp cận"
            },
            {
              "id": "3w84JnwxbUVR4P",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "in_room_accessibility",
              "name_en": "In Room Accessibility",
              "name_vn": "Tiện nghi phòng dễ tiếp cận",
              "description_en": "Has accessible in-room facilities",
              "description_vn": "Có tiện nghi phòng dễ tiếp cận"
            },
            {
              "id": "3wAGGDH9J9z86B",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "roll_in_shower",
              "name_en": "Roll In Shower",
              "name_vn": "Vòi hoa sen đẩy vào",
              "description_en": "Offers roll-in showers",
              "description_vn": "Có vòi hoa sen đẩy vào dễ tiếp cận"
            },
            {
              "id": "3zL5mgYJeC9jGR",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "braille_or_raised_signage",
              "name_en": "Braille Or Raised Signage",
              "name_vn": "Chữ nổi hoặc ký hiệu bằng chữ nổi",
              "description_en": "Has Braille or raised signage",
              "description_vn": "Có chữ nổi hoặc ký hiệu bằng chữ nổi"
            },
            {
              "id": "3zMaabQYX9eR7o",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "accessibility_equipment",
              "name_en": "Accessibility Equipment",
              "name_vn": "Thiết bị hỗ trợ tiếp cận",
              "description_en": "Provides accessibility equipment",
              "description_vn": "Cung cấp thiết bị hỗ trợ tiếp cận"
            },
            {
              "id": "3zPnXydEHNoQFH",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "wheelchair_accessible",
              "name_en": "Wheelchair Accessible",
              "name_vn": "Dễ tiếp cận cho xe lăn",
              "description_en": "Wheelchair accessible facilities",
              "description_vn": "Cơ sở dễ tiếp cận cho xe lăn"
            },
            {
              "id": "3zRzL39hqGbMvb",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "access_friendly",
              "name_en": "Access Friendly",
              "name_vn": "Thân thiện với người khuyết tật",
              "description_en": "Facilities are access friendly",
              "description_vn": "Cơ sở dễ tiếp cận"
            }
          ]
        },
        {
          "id": "iUwwz6hKfpSZ",
          "status": 1,
          "created_at": "2024-03-24T12:47:34+07:00",
          "updated_at": "2024-03-24T12:47:34+07:00",
          "name": "business",
          "name_en": "Business",
          "name_vn": "Tiện ích kinh doanh",
          "facilities": [
            {
              "id": "43b6h34RQNet5d",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "business_center",
              "name_en": "Business Center",
              "name_vn": "Trung tâm kinh doanh",
              "description_en": "Has a business center",
              "description_vn": "Có trung tâm kinh doanh"
            },
            {
              "id": "43dJeRH74HgHRF",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "meeting_facilities",
              "name_en": "Meeting Facilities",
              "name_vn": "Cơ sở hội nghị",
              "description_en": "Offers meeting facilities",
              "description_vn": "Có cơ sở hội nghị"
            },
            {
              "id": "43fWbqcHsFswms",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "computer_station",
              "name_en": "Computer Station",
              "name_vn": "Trạm máy tính",
              "description_en": "Has a computer station",
              "description_vn": "Có trạm máy tính"
            },
            {
              "id": "43h1QiN2hUKxQ7",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "secretarial_service",
              "name_en": "Secretarial Service",
              "name_vn": "Dịch vụ thư ký",
              "description_en": "Offers secretarial services",
              "description_vn": "Có dịch vụ thư ký"
            },
            {
              "id": "46rpvDjh6GxsGX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "conference_room",
              "name_en": "Conference Room",
              "name_vn": "Phòng hội nghị",
              "description_en": "Has a conference room",
              "description_vn": "Có phòng hội nghị"
            },
            {
              "id": "46u2iHGeWCDyNX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "projector",
              "name_en": "Projector",
              "name_vn": "Máy chiếu",
              "description_en": "Provides a projector",
              "description_vn": "Cung cấp máy chiếu"
            },
            {
              "id": "46vXXC8QdSP6Wq",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "conference_hostess",
              "name_en": "Conference Hostess",
              "name_vn": "Nhân viên chương trình hội nghị",
              "description_en": "Has a conference hostess",
              "description_vn": "Có nhân viên chương trình hội nghị"
            },
            {
              "id": "4A6M2fPZyUYhmK",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "photocopier",
              "name_en": "Photocopier",
              "name_vn": "Máy photocopy",
              "description_en": "Provides a photocopier",
              "description_vn": "Có máy photocopy"
            },
            {
              "id": "4A8Yz3cjP9kvfq",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "theatre_or_auditorium",
              "name_en": "Theatre Or Auditorium",
              "name_vn": "Nhà hát hoặc khán phòng",
              "description_en": "Has a theatre or auditorium",
              "description_vn": "Có nhà hát hoặc khán phòng"
            },
            {
              "id": "4AA3nxUVcfCNkB",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "business_facility",
              "name_en": "Business Facility",
              "name_vn": "Cơ sở kinh doanh",
              "description_en": "Offers business facilities",
              "description_vn": "Có cơ sở kinh doanh"
            },
            {
              "id": "4ACFkLhBGaDnA3",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "printer",
              "name_en": "PRINTER",
              "name_vn": "Máy in",
              "description_en": "Provides a printer",
              "description_vn": "Có máy in"
            }
          ]
        },
        {
          "id": "3mHP91WrjtKSMf",
          "status": 1,
          "created_at": "2024-03-24T12:47:34+07:00",
          "updated_at": "2024-03-24T12:47:34+07:00",
          "name": "connectivity",
          "name_en": "Connectivity",
          "name_vn": "Kết nối",
          "facilities": [
            {
              "id": "4DN5Fr5KR7ct45",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "wifi_surcharge",
              "name_en": "Wifi Surcharge",
              "name_vn": "Phụ phí wifi",
              "description_en": "Charges a surcharge for wifi",
              "description_vn": "Tính phụ phí cho wifi"
            },
            {
              "id": "4DPZuQ8NPa5Fv9",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "wifi_free",
              "name_en": "Wifi Free",
              "name_vn": "Wifi miễn phí",
              "description_en": "Offers free wifi",
              "description_vn": "Cung cấp wifi miễn phí"
            },
            {
              "id": "4DRmrpTZCYGvCX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "lan_internet_access",
              "name_en": "Lan Internet Access",
              "name_vn": "Truy cập internet LAN",
              "description_en": "Offers LAN internet access",
              "description_vn": "Cung cấp truy cập internet LAN"
            },
            {
              "id": "4DTypCgicC4WiF",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "lan_internet_access_surcharge",
              "name_en": "Lan Internet Access Surcharge",
              "name_vn": "Phụ phí truy cập internet LAN",
              "description_en": "Charges a surcharge for LAN internet access",
              "description_vn": "Tính phụ phí cho truy cập internet LAN"
            },
            {
              "id": "DCTF1FGmjW9wC1M",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "wifi_public_area_surcharge",
              "name_en": "Wifi Public Area Surcharge",
              "name_vn": "Phụ phí wifi khu vực công cộng",
              "description_en": "Charges a surcharge for wifi in public areas",
              "description_vn": "Tính phụ phí cho wifi tại khu vực công cộng"
            },
            {
              "id": "DCTGW4BdVjfNe1T",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "internet_point",
              "name_en": "Internet Point",
              "name_vn": "Điểm truy cập internet",
              "description_en": "Provides an internet point",
              "description_vn": "Có điểm truy cập internet"
            },
            {
              "id": "DCTJi1Zrf9LarzD",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "international_call",
              "name_en": "INTERNATIONAL_CALL",
              "name_vn": "Gọi quốc tế",
              "description_en": "Offers international calling",
              "description_vn": "Cung cấp dịch vụ gọi quốc tế"
            }
          ]
        },
        {
          "id": "3mKb6RrXJbHcTh",
          "status": 1,
          "created_at": "2024-03-24T12:47:34+07:00",
          "updated_at": "2024-03-24T12:47:34+07:00",
          "name": "facilities",
          "name_en": "Facilities",
          "name_vn": "Cơ sở vật chất",
          "facilities": [
            {
              "id": "DCWUXMkY7S6Zhao",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "family_room",
              "name_en": "Family Room",
              "name_vn": "Phòng gia đình",
              "description_en": "Has family rooms",
              "description_vn": "Có phòng gia đình"
            },
            {
              "id": "DCWW2AdHNWbg9eT",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "smoking_area",
              "name_en": "Smoking Area",
              "name_vn": "Khu vực hút thuốc",
              "description_en": "Has a designated smoking area",
              "description_vn": "Có khu vực hút thuốc được chỉ định"
            },
            {
              "id": "DCWYE83d35HDNdu",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "air_conditioning",
              "name_en": "Air Conditioning",
              "name_vn": "Điều hòa",
              "description_en": "Offers air conditioning",
              "description_vn": "Có điều hòa không khí"
            },
            {
              "id": "DCWaS5RqijCEmyX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "non_smoking_room",
              "name_en": "Non Smoking Room",
              "name_vn": "Phòng không hút thuốc",
              "description_en": "Has non-smoking rooms",
              "description_vn": "Có phòng không hút thuốc"
            },
            {
              "id": "DCZjYSRkSJJJJ8Z",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "terrace",
              "name_en": "Terrace",
              "name_vn": "Sân thượng",
              "description_en": "Has a terrace",
              "description_vn": "Có sân thượng"
            },
            {
              "id": "DCZmkPoy7xDKhUB",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "fireplace_in_lobby",
              "name_en": "Fireplace In Lobby",
              "name_vn": "Lò sưởi tại sảnh",
              "description_en": "Has a fireplace in the lobby",
              "description_vn": "Có lò sưởi tại sảnh"
            },
            {
              "id": "DCZoxBsVbcRFEwM",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "ballroom",
              "name_en": "Ballroom",
              "name_vn": "Phòng khiêu vũ",
              "description_en": "Has a ballroom",
              "description_vn": "Có phòng khiêu vũ"
            },
            {
              "id": "DCZqSznMqVNjvnj",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "banquet",
              "name_en": "Banquet",
              "name_vn": "Phòng tiệc",
              "description_en": "Offers banquet facilities",
              "description_vn": "Có phòng tiệc"
            },
            {
              "id": "DCd1GWFczqSLAS1",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "cloakroom",
              "name_en": "Cloakroom",
              "name_vn": "Phòng để đồ",
              "description_en": "Has a cloakroom",
              "description_vn": "Có phòng để đồ"
            },
            {
              "id": "DCd3UTfxBeP7CKb",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "clothes_dryer",
              "name_en": "Clothes Dryer",
              "name_vn": "Máy sấy quần áo",
              "description_en": "Provides a clothes dryer",
              "description_vn": "Có máy sấy quần áo"
            },
            {
              "id": "DCd4yGYhvUcyqQs",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "connecting_rooms",
              "name_en": "Connecting Rooms",
              "name_vn": "Phòng nối liền",
              "description_en": "Offers connecting rooms",
              "description_vn": "Có phòng nối liền"
            },
            {
              "id": "DCd7BDy37HZksJT",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "smoking_free",
              "name_en": "Smoking Free",
              "name_vn": "Không hút thuốc",
              "description_en": "Offers smoking-free facilities",
              "description_vn": "Cung cấp không gian không hút thuốc"
            },
            {
              "id": "DCgGzjSJGXLe9h9",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "heater",
              "name_en": "Heater",
              "name_vn": "Bếp sưởi",
              "description_en": "Provides a heater",
              "description_vn": "Có bếp sưởi"
            },
            {
              "id": "DCgJVNzMoMpZMBs",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "rooftop_terrace",
              "name_en": "Rooftop Terrace",
              "name_vn": "Sân thượng trên mái nhà",
              "description_en": "Has a rooftop terrace",
              "description_vn": "Có sân thượng trên mái nhà"
            },
            {
              "id": "DCgLhLQgz4UdkUR",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "recreation_room",
              "name_en": "Recreation Room",
              "name_vn": "Phòng giải trí",
              "description_en": "Has a recreation room",
              "description_vn": "Có phòng giải trí"
            },
            {
              "id": "DCjWWqsx9QYDz7h",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "pool",
              "name_en": "Pool",
              "name_vn": "Hồ bơi",
              "description_en": "Has a pool",
              "description_vn": "Có hồ bơi"
            }
          ]
        },
        {
          "id": "3mMo3p5CxWJh9m",
          "status": 1,
          "created_at": "2024-03-24T12:47:34+07:00",
          "updated_at": "2024-03-24T12:47:34+07:00",
          "name": "food_and_drinks",
          "name_en": "Food and Drinks",
          "name_vn": "Ăn uống",
          "facilities": [
            {
              "id": "DCjYioJHorw4FnK",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "winery",
              "name_en": "Winery",
              "name_vn": "Nhà máy rượu vang",
              "description_en": "Has a winery",
              "description_vn": "Có nhà máy rượu vang"
            },
            {
              "id": "DCjaDcB353isfAo",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "beach_bar",
              "name_en": "Beach Bar",
              "name_vn": "Quầy bar bãi biển",
              "description_en": "Has a beach bar",
              "description_vn": "Có quầy bar bãi biển"
            },
            {
              "id": "DCjcRZbNFkNwjfK",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "bar",
              "name_en": "Bar",
              "name_vn": "Quầy bar",
              "description_en": "Has a bar",
              "description_vn": "Có quầy bar"
            },
            {
              "id": "DCnnEujwgkA4ik9",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "nightclub",
              "name_en": "Nightclub",
              "name_vn": "Vũ trường",
              "description_en": "Has a nightclub",
              "description_vn": "Có vũ trường"
            },
            {
              "id": "DCnojicgwvvTAsZ",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "poolside_bar",
              "name_en": "Poolside Bar",
              "name_vn": "Quầy bar hồ bơi",
              "description_en": "Has a poolside bar",
              "description_vn": "Có quầy bar hồ bơi"
            },
            {
              "id": "DCnqwg32cPLiPj1",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "snack_bar",
              "name_en": "Snack Bar",
              "name_vn": "Quầy đồ ăn nhẹ",
              "description_en": "Has a snack bar",
              "description_vn": "Có quầy đồ ăn nhẹ"
            },
            {
              "id": "DCnt9dRFJ9YSkTh",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "breakfast",
              "name_en": "Breakfast",
              "name_vn": "Bữa sáng",
              "description_en": "Serves breakfast",
              "description_vn": "Phục vụ bữa sáng"
            },
            {
              "id": "DCr3FzR9Xrd387o",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "breakfast_surcharge",
              "name_en": "Breakfast Surcharge",
              "name_vn": "Phụ phí bữa sáng",
              "description_en": "Charges a surcharge for breakfast",
              "description_vn": "Tính phụ phí cho bữa sáng"
            },
            {
              "id": "DCr5TwoNhNZXfxM",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "show_cooking",
              "name_en": "Show Cooking",
              "name_vn": "Trình diễn nấu ăn",
              "description_en": "Offers show cooking",
              "description_vn": "Có trình diễn nấu ăn"
            },
            {
              "id": "DCr7fuDht5DbkSs",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "air_conditioning_in_restaurant",
              "name_en": "Air Conditioning In Restaurant",
              "name_vn": "Điều hòa tại nhà hàng",
              "description_en": "Restaurant has air conditioning",
              "description_vn": "Nhà hàng có điều hòa không khí"
            },
            {
              "id": "DCr9AYmkw9zBi6o",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "cafe",
              "name_en": "Cafe",
              "name_vn": "Quán cà phê",
              "description_en": "Has a cafe",
              "description_vn": "Có quán cà phê"
            },
            {
              "id": "DCuJz4H95CDTEHD",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "pub",
              "name_en": "Pub",
              "name_vn": "Quán rượu",
              "description_en": "Has a pub",
              "description_vn": "Có quán rượu"
            },
            {
              "id": "DCuMC1fMkxScDQh",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "set_menu_dinner",
              "name_en": "Set Menu Dinner",
              "name_vn": "Bữa tối theo thực đơn",
              "description_en": "Offers set menu dinner",
              "description_vn": "Phục vụ bữa tối theo thực đơn"
            },
            {
              "id": "DCuNgpY722vHiHX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "breakfast_and_dinner",
              "name_en": "Breakfast And Dinner",
              "name_vn": "Bữa sáng và bữa tối",
              "description_en": "Serves breakfast and dinner",
              "description_vn": "Phục vụ bữa sáng và bữa tối"
            },
            {
              "id": "DCxYWL3VABTh8uM",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "snacks",
              "name_en": "Snacks",
              "name_vn": "Đồ ăn nhẹ",
              "description_en": "Offers snacks",
              "description_vn": "Phục vụ đồ ăn nhẹ"
            },
            {
              "id": "DCxaiHRhqwfRVe3",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "breakfast_and_lunch",
              "name_en": "Breakfast And Lunch",
              "name_vn": "Bữa sáng và bữa trưa",
              "description_en": "Serves breakfast and lunch",
              "description_vn": "Phục vụ bữa sáng và bữa trưa"
            },
            {
              "id": "DCxcCw1sPxtMB83",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "special_dietary_options",
              "name_en": "Special Dietary Options",
              "name_vn": "Lựa chọn ăn uống đặc biệt",
              "description_en": "Offers special dietary options",
              "description_vn": "Có lựa chọn ăn uống đặc biệt"
            },
            {
              "id": "DCxeQtQ6ZUpqitM",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "early_bird_breakfast",
              "name_en": "Early Bird Breakfast",
              "name_vn": "Bữa sáng sớm",
              "description_en": "Serves early bird breakfast",
              "description_vn": "Phục vụ bữa sáng sớm"
            },
            {
              "id": "DSqRA2APy78Djvy",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "late_riser_breakfast",
              "name_en": "Late Riser Breakfast",
              "name_vn": "Bữa sáng muộn",
              "description_en": "Serves late riser breakfast",
              "description_vn": "Phục vụ bữa sáng muộn"
            },
            {
              "id": "DSqTMyYd8d4iHhH",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "hot_breakfast",
              "name_en": "Hot Breakfast",
              "name_vn": "Bữa sáng nóng",
              "description_en": "Serves hot breakfast",
              "description_vn": "Phục vụ bữa sáng nóng"
            },
            {
              "id": "DSqUrnRNPhYPna7",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "breakfast_served_to_the_table",
              "name_en": "Breakfast Served To The Table",
              "name_vn": "Bữa sáng phục vụ tận bàn",
              "description_en": "Breakfast is served to the table",
              "description_vn": "Bữa sáng được phục vụ tận bàn"
            },
            {
              "id": "DSqX4jqhaWWbmeX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "brunch",
              "name_en": "Brunch",
              "name_vn": "Bữa trưa muộn",
              "description_en": "Serves brunch",
              "description_vn": "Phục vụ bữa trưa muộn"
            },
            {
              "id": "DStgt5zH1Pyar9T",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "gluten_free_meals",
              "name_en": "Gluten Free Meals",
              "name_vn": "Món ăn không gluten",
              "description_en": "Offers gluten-free meals",
              "description_vn": "Phục vụ món ăn không gluten"
            },
            {
              "id": "DStiNtu8mdWTFQd",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "no_alcohol_is_served",
              "name_en": "No Alcohol Is Served",
              "name_vn": "Không phục vụ rượu",
              "description_en": "Does not serve alcohol",
              "description_vn": "Không phục vụ rượu"
            },
            {
              "id": "DStkarHMTHRUekF",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "vegetarian_meal",
              "name_en": "Vegetarian Meal",
              "name_vn": "Món ăn chay",
              "description_en": "Offers vegetarian meals",
              "description_vn": "Phục vụ món ăn chay"
            },
            {
              "id": "DSwvQMnjbRxskiX",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "half_board_without_drinks",
              "name_en": "Half Board Without Drinks",
              "name_vn": "Bữa nửa ngày không bao gồm đồ uống",
              "description_en": "Offers half board without drinks",
              "description_vn": "Phục vụ bữa nửa ngày không bao gồm đồ uống"
            },
            {
              "id": "DSwwuAfUrcjGXdy",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "half_board_with_non_alcoholic_drinks",
              "name_en": "Half Board With Non Alcoholic Drinks",
              "name_vn": "Bữa nửa ngày với đồ uống không cồn",
              "description_en": "Offers half board with non-alcoholic drinks",
              "description_vn": "Phục vụ bữa nửa ngày với đồ uống không cồn"
            },
            {
              "id": "DSwz783hYGfiEiq",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "half_board_with_drinks",
              "name_en": "Half Board With Drinks",
              "name_vn": "Bữa nửa ngày với đồ uống",
              "description_en": "Offers half board with drinks",
              "description_vn": "Phục vụ bữa nửa ngày với đồ uống"
            },
            {
              "id": "DSx2K5U3CqMFnS5",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "full_board_without_drinks",
              "name_en": "Full Board Without Drinks",
              "name_vn": "Ăn ba bữa không bao gồm đồ uống",
              "description_en": "Offers full board without drinks",
              "description_vn": "Phục vụ ăn ba bữa không bao gồm đồ uống"
            },
            {
              "id": "DT1BRH78jPfZiUw",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "full_board_with_non_alcoholic_drinks",
              "name_en": "Full Board With Non Alcoholic Drinks",
              "name_vn": "Ăn ba bữa với đồ uống không cồn",
              "description_en": "Offers full board with non-alcoholic drinks",
              "description_vn": "Phục vụ ăn ba bữa với đồ uống không cồn"
            },
            {
              "id": "DT1DdEXTvCcM56K",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "full_board_with_drinks",
              "name_en": "Full Board With Drinks",
              "name_vn": "Ăn ba bữa với đồ uống",
              "description_en": "Offers full board with drinks",
              "description_vn": "Phục vụ ăn ba bữa với đồ uống"
            },
            {
              "id": "DT1FqBuh5cHZJ55",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "breakfast_buffet",
              "name_en": "Breakfast Buffet",
              "name_vn": "Bữa sáng đầy đủ",
              "description_en": "Serves breakfast buffet",
              "description_vn": "Phục vụ bữa sáng đầy đủ"
            },
            {
              "id": "DT1HKzpYqqnzk5B",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "a_la_carte_breakfast",
              "name_en": "A La Carte Breakfast",
              "name_vn": "Bữa sáng theo món",
              "description_en": "Serves a la carte breakfast",
              "description_vn": "Phục vụ bữa sáng theo món"
            },
            {
              "id": "DT4T9WHp15YTPzq",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "continental_breakfast",
              "name_en": "Continental Breakfast",
              "name_vn": "Bữa sáng kiểu lục địa",
              "description_en": "Serves continental breakfast",
              "description_vn": "Phục vụ bữa sáng kiểu lục địa"
            },
            {
              "id": "DT4VMTi9feFRFP5",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "buffet_lunch",
              "name_en": "Buffet Lunch",
              "name_vn": "Bữa trưa đầy đủ",
              "description_en": "Serves buffet lunch",
              "description_vn": "Phục vụ bữa trưa đầy đủ"
            },
            {
              "id": "DT4Wr7GCichsdF9",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "a_la_carte_lunch",
              "name_en": "A La Carte Lunch",
              "name_vn": "Bữa trưa theo món",
              "description_en": "Serves a la carte lunch",
              "description_vn": "Phục vụ bữa trưa theo món"
            },
            {
              "id": "DT4Z44eRt8fnUpw",
              "status": 1,
              "created_at": "2024-03-24T12:47:34+07:00",
              "updated_at": "2024-03-24T12:47:34+07:00",
              "name": "set_menu_lunch",
              "name_en": "Set Menu Lunch",
              "name_vn": "Bữa trưa theo thực đơn",
              "description_en": "Serves set menu lunch",
              "description_vn": "Phục vụ bữa trưa theo thực đơn"
            },
            {
              "id": "DT7isa9oYXT15ss",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "buffet_dinner",
              "name_en": "Buffet Dinner",
              "name_vn": "Bữa tối đầy đủ",
              "description_en": "Serves buffet dinner",
              "description_vn": "Phục vụ bữa tối đầy đủ"
            },
            {
              "id": "DT7m5XY2EBPSo2y",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "a_la_carte_dinner",
              "name_en": "A La Carte Dinner",
              "name_vn": "Bữa tối theo món",
              "description_en": "Serves a la carte dinner",
              "description_vn": "Phục vụ bữa tối theo món"
            },
            {
              "id": "DT7naLStUAdekrj",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "gala_dinner",
              "name_en": "Gala Dinner",
              "name_vn": "Bữa tối lễ hội",
              "description_en": "Offers gala dinner",
              "description_vn": "Phục vụ bữa tối lễ hội"
            },
            {
              "id": "DTAxPqv9dQQY3FR",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "dining_area",
              "name_en": "Dining Area",
              "name_vn": "Khu vực ăn uống",
              "description_en": "Has a dining area",
              "description_vn": "Có khu vực ăn uống"
            }
          ]
        },
        {
          "id": "3mPHrivyC1kTwu",
          "status": 1,
          "created_at": "2024-03-24T12:47:35+07:00",
          "updated_at": "2024-03-24T12:47:35+07:00",
          "name": "inside_room",
          "name_en": "Inside Room",
          "name_vn": "Bên trong phòng",
          "facilities": [
            {
              "id": "DTAzboLUpDMK591",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "bathrobe",
              "name_en": "Bathrobe",
              "name_vn": "Áo choàng tắm",
              "description_en": "Provides bathrobes in the room",
              "description_vn": "Có áo choàng tắm trong phòng"
            },
            {
              "id": "DTB26StYLwZxGVj",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "bathtub",
              "name_en": "Bathtub",
              "name_vn": "Bồn tắm",
              "description_en": "Room has a bathtub",
              "description_vn": "Phòng có bồn tắm"
            },
            {
              "id": "DTB4JQGm2hmgJWd",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "desk",
              "name_en": "Desk",
              "name_vn": "Bàn làm việc",
              "description_en": "Room has a desk",
              "description_vn": "Phòng có bàn làm việc"
            },
            {
              "id": "DTEE7un8gzGBxEj",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "refrigerator",
              "name_en": "Refrigerator",
              "name_vn": "Tủ lạnh",
              "description_en": "Room has a refrigerator",
              "description_vn": "Phòng có tủ lạnh"
            },
            {
              "id": "DTEFcietRvnmE1H",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "hair_dryer",
              "name_en": "Hair Dryer",
              "name_vn": "Máy sấy tóc",
              "description_en": "Room has a hair dryer",
              "description_vn": "Phòng có máy sấy tóc"
            },
            {
              "id": "DTEHpg5DcdSqdHq",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "in_room_safe",
              "name_en": "In Room Safe",
              "name_vn": "Két an toàn trong phòng",
              "description_en": "Room has an in-room safe",
              "description_vn": "Phòng có két an toàn"
            },
            {
              "id": "DTEL2dTSJPfzHhX",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "television",
              "name_en": "Television",
              "name_vn": "Tivi",
              "description_en": "Room has a television",
              "description_vn": "Phòng có tivi"
            },
            {
              "id": "DTHV8q8eorjQ4Nm",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "shower",
              "name_en": "Shower",
              "name_vn": "Vòi hoa sen",
              "description_en": "Room has a shower",
              "description_vn": "Phòng có vòi hoa sen"
            },
            {
              "id": "DTHXLnWsVWfr6BR",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "separate_shower_and_tub",
              "name_en": "Separate Shower And Tub",
              "name_vn": "Vòi hoa sen và bồn tắm riêng biệt",
              "description_en": "Room has a separate shower and tub",
              "description_vn": "Phòng có vòi hoa sen và bồn tắm riêng biệt"
            },
            {
              "id": "DTHZYjwDA5MPKAs",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "minibar",
              "name_en": "Minibar",
              "name_vn": "Tủ lạnh mini",
              "description_en": "Room has a minibar",
              "description_vn": "Phòng có tủ lạnh mini"
            },
            {
              "id": "DTHb3YoxR9rVmEX",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "microwave",
              "name_en": "Microwave",
              "name_vn": "Lò vi sóng",
              "description_en": "Room has a microwave",
              "description_vn": "Phòng có lò vi sóng"
            },
            {
              "id": "DTLks4HDaVtf3gy",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "kitchenette",
              "name_en": "Kitchenette",
              "name_vn": "Bếp nhỏ",
              "description_en": "Room has a kitchenette",
              "description_vn": "Phòng có bếp nhỏ"
            },
            {
              "id": "DTLo51hZExJvGYR",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "cable_tv",
              "name_en": "Cable Tv",
              "name_vn": "Truyền hình cáp",
              "description_en": "Room has cable TV",
              "description_vn": "Phòng có truyền hình cáp"
            },
            {
              "id": "DTLpZfFcJ345GwH",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "dvd_player",
              "name_en": "Dvd Player",
              "name_vn": "Đầu đĩa DVD",
              "description_en": "Room has a DVD player",
              "description_vn": "Phòng có đầu đĩa DVD"
            }
          ]
        },
        {
          "id": "3pZ7NCCcBXPceR",
          "status": 1,
          "created_at": "2024-03-24T12:47:35+07:00",
          "updated_at": "2024-03-24T12:47:35+07:00",
          "name": "nearby_amenities",
          "name_en": "Nearby Amentities",
          "name_vn": "Tiện nghi lân cận",
          "facilities": [
            {
              "id": "DhDbJo1uhfL2zEf",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "gift_shop",
              "name_en": "Gift Shop",
              "name_vn": "Cửa hàng lưu niệm",
              "description_en": "Has a gift shop nearby",
              "description_vn": "Có cửa hàng lưu niệm gần đó"
            },
            {
              "id": "DhDdWkQ8sBHxAYF",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "shops",
              "name_en": "Shops",
              "name_vn": "Cửa hàng",
              "description_en": "Has shops nearby",
              "description_vn": "Có cửa hàng gần đó"
            },
            {
              "id": "DhDfihpU3sx2F2m",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "atm_or_banking",
              "name_en": "Atm Or Banking",
              "name_vn": "Máy ATM hoặc ngân hàng",
              "description_en": "Has an ATM or banking facility nearby",
              "description_vn": "Có máy ATM hoặc ngân hàng gần đó"
            },
            {
              "id": "DhDhDWhDK4jqeRF",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "hair_salon",
              "name_en": "Hair Salon",
              "name_vn": "Tiệm làm tóc",
              "description_en": "Has a hair salon nearby",
              "description_vn": "Có tiệm làm tóc gần đó"
            },
            {
              "id": "DhGs32AUxAWm7yZ",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "grocery",
              "name_en": "Grocery",
              "name_vn": "Cửa hàng tạp hóa",
              "description_en": "Has a grocery store nearby",
              "description_vn": "Có cửa hàng tạp hóa gần đó"
            },
            {
              "id": "DhGuEyap8sCG9j9",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "supermarket",
              "name_en": "Supermarket",
              "name_vn": "Siêu thị",
              "description_en": "Has a supermarket nearby",
              "description_vn": "Có siêu thị gần đó"
            },
            {
              "id": "DhGvjd8sBwwRACF",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "launderette",
              "name_en": "Launderette",
              "name_vn": "Tiệm giặt là",
              "description_en": "Has a launderette nearby",
              "description_vn": "Có tiệm giặt là gần đó"
            },
            {
              "id": "DhGxwaZCrQMgNyT",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "beauty_salon",
              "name_en": "Beauty Salon",
              "name_vn": "Tiệm làm đẹp",
              "description_en": "Has a beauty salon nearby",
              "description_vn": "Có tiệm làm đẹp gần đó"
            }
          ]
        },
        {
          "id": "3pbKAHqatSwXXF",
          "status": 1,
          "created_at": "2024-03-24T12:47:35+07:00",
          "updated_at": "2024-03-24T12:47:35+07:00",
          "name": "service",
          "name_en": "Service",
          "name_vn": "Dịch vụ",
          "facilities": [
            {
              "id": "DhL8m62U1kPqfW9",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "front_desk",
              "name_en": "Front Desk",
              "name_vn": "Quầy lễ tân",
              "description_en": "Has a front desk",
              "description_vn": "Có quầy lễ tân"
            },
            {
              "id": "DhLAFtwKmse17NF",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "concierge",
              "name_en": "Concierge",
              "name_vn": "Nhân viên lễ tân",
              "description_en": "Has a concierge",
              "description_vn": "Có nhân viên lễ tân"
            },
            {
              "id": "DhLCTrKYwPaVfCo",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "laundry_service",
              "name_en": "Laundry Service",
              "name_vn": "Dịch vụ giặt ủi",
              "description_en": "Offers laundry services",
              "description_vn": "Có dịch vụ giặt ủi"
            },
            {
              "id": "DhPNHMnp6dKwzQf",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "tours",
              "name_en": "Tours",
              "name_vn": "Các tour du lịch",
              "description_en": "Offers tours",
              "description_vn": "Có các tour du lịch"
            },
            {
              "id": "DhPPn1Nz8WaM8xu",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "has_24_hour_front_desk",
              "name_en": "Has 24 Hour Front Desk",
              "name_vn": "Có quầy lễ tân 24 giờ",
              "description_en": "Has a 24-hour front desk",
              "description_vn": "Có quầy lễ tân phục vụ 24 giờ"
            },
            {
              "id": "DhPRyxmCpAVNDey",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "luggage_storage",
              "name_en": "Luggage Storage",
              "name_vn": "Dịch vụ giữ hành lý",
              "description_en": "Offers luggage storage",
              "description_vn": "Có dịch vụ giữ hành lý"
            },
            {
              "id": "DhPUBvBXzyTaCf9",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "porter",
              "name_en": "Porter",
              "name_vn": "Nhân viên bốc vác",
              "description_en": "Has porters",
              "description_vn": "Có nhân viên bốc vác"
            },
            {
              "id": "DhSdJH9LDVoA6UT",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "limited_hours_room_service",
              "name_en": "Limited Hours Room Service",
              "name_vn": "Dịch vụ phòng giới hạn giờ",
              "description_en": "Offers limited hours room service",
              "description_vn": "Có dịch vụ phòng giới hạn giờ"
            },
            {
              "id": "DhSfWEZfQCUf8E3",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "newspaper_in_lobby",
              "name_en": "Newspaper In Lobby",
              "name_vn": "Báo tại sảnh",
              "description_en": "Provides newspapers in the lobby",
              "description_vn": "Cung cấp báo tại sảnh"
            },
            {
              "id": "DhShiBwt5xgPAAh",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "multilingual_staff",
              "name_en": "Multilingual Staff",
              "name_vn": "Nhân viên đa ngôn ngữ",
              "description_en": "Has multilingual staff",
              "description_vn": "Có nhân viên đa ngôn ngữ"
            },
            {
              "id": "DhSjv9NDkR6eP29",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "wedding_service",
              "name_en": "Wedding Service",
              "name_vn": "Dịch vụ cưới hỏi",
              "description_en": "Offers wedding services",
              "description_vn": "Có dịch vụ cưới hỏi"
            },
            {
              "id": "DhVu2M1KH5gExeb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "express_check_in",
              "name_en": "Express Check In",
              "name_vn": "Nhận phòng nhanh",
              "description_en": "Offers express check-in",
              "description_vn": "Có dịch vụ nhận phòng nhanh"
            },
            {
              "id": "DhVwEJPXxjcgfoh",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "express_check_out",
              "name_en": "Express Check Out",
              "name_vn": "Trả phòng nhanh",
              "description_en": "Offers express checkout",
              "description_vn": "Có dịch vụ trả phòng nhanh"
            },
            {
              "id": "DhVySFosdJJEDWw",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "complimentary_reception",
              "name_en": "Complimentary Reception",
              "name_vn": "Lễ tân miễn phí",
              "description_en": "Offers complimentary reception",
              "description_vn": "Có dịch vụ lễ tân miễn phí"
            },
            {
              "id": "DhVzw4gctNmuiKX",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "early_check_in",
              "name_en": "Early Check In",
              "name_vn": "Nhận phòng sớm",
              "description_en": "Offers early check-in",
              "description_vn": "Có dịch vụ nhận phòng sớm"
            },
            {
              "id": "DhZAkaBzYmaYwuj",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "late_check_out",
              "name_en": "Late Check Out",
              "name_vn": "Trả phòng muộn",
              "description_en": "Offers late checkout",
              "description_vn": "Có dịch vụ trả phòng muộn"
            },
            {
              "id": "DhZCxXaDiBELDdR",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "currency_exchange",
              "name_en": "Currency Exchange",
              "name_vn": "Đổi ngoại tệ",
              "description_en": "Offers currency exchange",
              "description_vn": "Có dịch vụ đổi ngoại tệ"
            },
            {
              "id": "DhZETBAPGJjyBA3",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "doorman",
              "name_en": "Doorman",
              "name_vn": "Lễ tân cửa ra vào",
              "description_en": "Has a doorman",
              "description_vn": "Có lễ tân cửa ra vào"
            },
            {
              "id": "DhcQGgdeuQWtyWP",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "mobile",
              "name_en": "Mobile",
              "name_vn": "Di động",
              "description_en": "Offers mobile services",
              "description_vn": "Cung cấp dịch vụ di động"
            },
            {
              "id": "DhcSUe1sb4TLgbF",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "medical_service",
              "name_en": "Medical Service",
              "name_vn": "Dịch vụ y tế",
              "description_en": "Offers medical services",
              "description_vn": "Cung cấp dịch vụ y tế"
            },
            {
              "id": "DhcTySvjMHxnTPP",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "has_24_hour_security",
              "name_en": "Has 24 Hour Security",
              "name_vn": "Có dịch vụ an ninh 24 giờ",
              "description_en": "Has 24-hour security",
              "description_vn": "Có dịch vụ an ninh 24 giờ"
            },
            {
              "id": "DhcWBQJxWhdzMa7",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "bellboy_service",
              "name_en": "Bellboy Service",
              "name_vn": "Dịch vụ bồi bàn",
              "description_en": "Has bellboy service",
              "description_vn": "Có dịch vụ bồi bàn"
            },
            {
              "id": "DhffzupLB6RCxhH",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "newspaper_stand",
              "name_en": "Newspaper Stand",
              "name_vn": "Sạp báo",
              "description_en": "Has a newspaper stand",
              "description_vn": "Có sạp báo"
            }
          ]
        },
        {
          "id": "3pcoyAbKpyWoDZ",
          "status": 1,
          "created_at": "2024-03-24T12:47:35+07:00",
          "updated_at": "2024-03-24T12:47:35+07:00",
          "name": "sports_and_recreation",
          "name_en": "Sports & Recreation",
          "name_vn": "Thể thao và giải trí",
          "facilities": [
            {
              "id": "DhfhVZNPE4u5eJb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "ski",
              "name_en": "Ski",
              "name_vn": "Trượt tuyết",
              "description_en": "Offers skiing",
              "description_vn": "Có dịch vụ trượt tuyết"
            },
            {
              "id": "DhfjhWnitdadBwb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "ski_storage",
              "name_en": "Ski Storage",
              "name_vn": "Nơi lưu trữ dụng cụ trượt tuyết",
              "description_en": "Has ski storage",
              "description_vn": "Có nơi lưu trữ dụng cụ trượt tuyết"
            },
            {
              "id": "DhfmuUAwaHVeGdf",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "billiards",
              "name_en": "Billiards",
              "name_vn": "Bi-a",
              "description_en": "Has billiards facilities",
              "description_vn": "Có dịch vụ chơi bi-a"
            },
            {
              "id": "Dhiw1q8jK47tvTh",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "outdoor_tennis_court",
              "name_en": "Outdoor Tennis Court",
              "name_vn": "Sân tennis ngoài trời",
              "description_en": "Has outdoor tennis courts",
              "description_vn": "Có sân tennis ngoài trời"
            },
            {
              "id": "DhiyDnZ4yWWjWr7",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "tennis",
              "name_en": "Tennis",
              "name_vn": "Quần vợt",
              "description_en": "Offers tennis facilities",
              "description_vn": "Có dịch vụ chơi quần vợt"
            },
            {
              "id": "Dhj1RjwHfGjtBL3",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "game_room",
              "name_en": "Game Room",
              "name_vn": "Phòng chơi game",
              "description_en": "Has a game room",
              "description_vn": "Có phòng chơi game"
            },
            {
              "id": "DwbnAshb51JYqt1",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "golf_course",
              "name_en": "Golf Course",
              "name_vn": "Sân golf",
              "description_en": "Has a golf course",
              "description_vn": "Có sân golf"
            },
            {
              "id": "DwbofXFebjXBibB",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "indoor_tennis_court",
              "name_en": "Indoor Tennis Court",
              "name_vn": "Sân tennis trong nhà",
              "description_en": "Has indoor tennis courts",
              "description_vn": "Có sân tennis trong nhà"
            },
            {
              "id": "DwbqsUfynYTy58K",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "golf_desk",
              "name_en": "Golf Desk",
              "name_vn": "Quầy golf",
              "description_en": "Has a golf desk",
              "description_vn": "Có quầy golf"
            },
            {
              "id": "Dwbt5S4CUCQQnHR",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "banana_boating",
              "name_en": "Banana Boating",
              "name_vn": "Trượt ca-nô",
              "description_en": "Offers banana boating",
              "description_vn": "Có dịch vụ trượt ca-nô"
            },
            {
              "id": "Dwf3Bo47BmV3zhD",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "waterskiing",
              "name_en": "Waterskiing",
              "name_vn": "Trượt nước",
              "description_en": "Offers waterskiing",
              "description_vn": "Có dịch vụ trượt nước"
            },
            {
              "id": "Dwf5PkSKsRRVhn5",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "jet_ski",
              "name_en": "Jet Ski",
              "name_vn": "Môtô nước",
              "description_en": "Offers jet skiing",
              "description_vn": "Có dịch vụ môtô nước"
            },
            {
              "id": "Dwf7bhpZ2wMzFcd",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "motor_board_ride",
              "name_en": "Motor Board Ride",
              "name_vn": "Trượt ván động cơ",
              "description_en": "Offers motor board rides",
              "description_vn": "Có dịch vụ trượt ván động cơ"
            },
            {
              "id": "Dwf96MQiaxavFkB",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "diving",
              "name_en": "Diving",
              "name_vn": "Lặn biển",
              "description_en": "Offers diving",
              "description_vn": "Có dịch vụ lặn biển"
            },
            {
              "id": "DwiJursykJd5YGs",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "windsurfing",
              "name_en": "Windsurfing",
              "name_vn": "Lướt ván buồm",
              "description_en": "Offers windsurfing",
              "description_vn": "Có dịch vụ lướt ván buồm"
            },
            {
              "id": "DwiM7pJKQm1v8fH",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "sailing",
              "name_en": "Sailing",
              "name_vn": "Chèo thuyền buồm",
              "description_en": "Offers sailing",
              "description_vn": "Có dịch vụ chèo thuyền buồm"
            },
            {
              "id": "DwiNcdB4fwojDFj",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "canoeing",
              "name_en": "Canoeing",
              "name_vn": "Chèo ca-nô",
              "description_en": "Offers canoeing",
              "description_vn": "Có dịch vụ chèo ca-nô"
            },
            {
              "id": "DwiQpabPrkkWZs7",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "catamaran_sailing",
              "name_en": "Catamaran Sailing",
              "name_vn": "Chèo thuyền buồm Catamaran",
              "description_en": "Offers catamaran sailing",
              "description_vn": "Có dịch vụ chèo thuyền buồm Catamaran"
            },
            {
              "id": "Dwmae64fVkG9iZd",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "pedal_boating",
              "name_en": "Pedal Boating",
              "name_vn": "Chèo thuyền bằng đạp",
              "description_en": "Offers pedal boating",
              "description_vn": "Có dịch vụ chèo thuyền bằng đạp"
            },
            {
              "id": "Dwmc8jciYq1K3kX",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "table_tennis",
              "name_en": "Table Tennis",
              "name_vn": "Bóng bàn",
              "description_en": "Has table tennis facilities",
              "description_vn": "Có dịch vụ chơi bóng bàn"
            },
            {
              "id": "DwmeLh33jXgp5W7",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "squash",
              "name_en": "Squash",
              "name_vn": "Squash",
              "description_en": "Has squash facilities",
              "description_vn": "Có dịch vụ chơi squash"
            },
            {
              "id": "DwppACWKNdTjZ4R",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "aerobics",
              "name_en": "Aerobics",
              "name_vn": "Aerobic",
              "description_en": "Offers aerobics classes",
              "description_vn": "Có lớp tập aerobic"
            },
            {
              "id": "Dwpqf1RB8khtzzm",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "fitness",
              "name_en": "Fitness",
              "name_vn": "Phòng tập thể dục",
              "description_en": "Has fitness facilities",
              "description_vn": "Có phòng tập thể dục"
            },
            {
              "id": "DwpsrxoPpWud2wR",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "archery",
              "name_en": "Archery",
              "name_vn": "Bắn cung",
              "description_en": "Offers archery",
              "description_vn": "Có dịch vụ bắn cung"
            },
            {
              "id": "Dwpv4vDjUyKtFns",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "horse_riding",
              "name_en": "Horse Riding",
              "name_vn": "Đi ngựa",
              "description_en": "Offers horse riding",
              "description_vn": "Có dịch vụ đi ngựa"
            },
            {
              "id": "Dwt5tRgzeKN3YKZ",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "cycling_or_mountain_biking",
              "name_en": "Cycling Or Mountain Biking",
              "name_vn": "Đạp xe hoặc xe đạp leo núi",
              "description_en": "Offers cycling or mountain biking",
              "description_vn": "Có dịch vụ đạp xe hoặc xe đạp leo núi"
            },
            {
              "id": "Dwt7P5F3hHpVv7P",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "handball",
              "name_en": "Handball",
              "name_vn": "Bóng ném",
              "description_en": "Has handball facilities",
              "description_vn": "Có dịch vụ chơi bóng ném"
            },
            {
              "id": "Dwt9b2fPMrXTmZs",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "basketball",
              "name_en": "Basketball",
              "name_vn": "Bóng rổ",
              "description_en": "Has basketball facilities",
              "description_vn": "Có dịch vụ chơi bóng rổ"
            },
            {
              "id": "DwtBnz3c3cjC8EK",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "volleyball",
              "name_en": "Volleyball",
              "name_vn": "Bóng chuyền",
              "description_en": "Has volleyball facilities",
              "description_vn": "Có dịch vụ chơi bóng chuyền"
            },
            {
              "id": "DwwLuM3Wm5YZ1nK",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "beach_volleyball",
              "name_en": "Beach Volleyball",
              "name_vn": "Bóng chuyền bãi biển",
              "description_en": "Has beach volleyball facilities",
              "description_vn": "Có dịch vụ chơi bóng chuyền bãi biển"
            },
            {
              "id": "DwwP7JRjSqkH3oD",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "pool_or_snooker",
              "name_en": "Pool Or Snooker",
              "name_vn": "Bi-da hoặc bi-a",
              "description_en": "Has pool or snooker facilities",
              "description_vn": "Có dịch vụ chơi bi-da hoặc bi-a"
            },
            {
              "id": "DwwRKFr4dYRn5UZ",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "bocce",
              "name_en": "Bocce",
              "name_vn": "Chơi bi",
              "description_en": "Has bocce facilities",
              "description_vn": "Có dịch vụ chơi bi"
            },
            {
              "id": "DwwSouQ8ANuhH3X",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "bowling_alley",
              "name_en": "Bowling Alley",
              "name_vn": "Sân bowling",
              "description_en": "Has a bowling alley",
              "description_vn": "Có sân bowling"
            },
            {
              "id": "DwzcdQuVpfRdZEf",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "mini_golf",
              "name_en": "Mini Golf",
              "name_vn": "Đánh golf mini",
              "description_en": "Has mini golf facilities",
              "description_vn": "Có dịch vụ đánh golf mini"
            },
            {
              "id": "DwzeqNHiWRdMbFZ",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "golf",
              "name_en": "Golf",
              "name_vn": "Chơi golf",
              "description_en": "Offers golf",
              "description_vn": "Có dịch vụ chơi golf"
            },
            {
              "id": "DwzgLBAUFFsEER5",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "surfing",
              "name_en": "Surfing",
              "name_vn": "Lướt sóng",
              "description_en": "Offers surfing",
              "description_vn": "Có dịch vụ lướt sóng"
            },
            {
              "id": "Dx3r9gfqueeSWkD",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "paddle_tennis",
              "name_en": "Paddle Tennis",
              "name_vn": "Quần vợt vợt",
              "description_en": "Has paddle tennis facilities",
              "description_vn": "Có dịch vụ chơi quần vợt vợt"
            },
            {
              "id": "Dx3tMe44bJZTvA5",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "badminton",
              "name_en": "Badminton",
              "name_vn": "Cầu lông",
              "description_en": "Has badminton facilities",
              "description_vn": "Có dịch vụ chơi cầu lông"
            },
            {
              "id": "Dx3urSxvqHq6WSs",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "darts",
              "name_en": "Darts",
              "name_vn": "Đẩy lựu",
              "description_en": "Has darts facilities",
              "description_vn": "Có dịch vụ chơi đẩy lựu"
            },
            {
              "id": "Dx3x4F2TJx1b6jD",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "golf_practice_facility",
              "name_en": "Golf Practice Facility",
              "name_vn": "Cơ sở tập luyện golf",
              "description_en": "Has golf practice facilities",
              "description_vn": "Có cơ sở tập luyện golf"
            },
            {
              "id": "Dx77skXpyEXXNzb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "safari",
              "name_en": "Safari",
              "name_vn": "Safari",
              "description_en": "Offers safari tours",
              "description_vn": "Có dịch vụ tour safari"
            },
            {
              "id": "Dx79NZQaiB2g2Ds",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "aqua_fit",
              "name_en": "Aqua Fit",
              "name_vn": "Tập thể dục dưới nước",
              "description_en": "Offers aqua fit classes",
              "description_vn": "Có lớp tập thể dục dưới nước"
            },
            {
              "id": "Dx7BaWnoPpy846m",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "fishing",
              "name_en": "Fishing",
              "name_vn": "Câu cá",
              "description_en": "Offers fishing",
              "description_vn": "Có dịch vụ câu cá"
            },
            {
              "id": "Dx7DnUD94PefH1y",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "sport_court",
              "name_en": "Sport Court",
              "name_vn": "Sân chơi thể thao",
              "description_en": "Has a sport court",
              "description_vn": "Có sân chơi thể thao"
            },
            {
              "id": "EByzXbwKxyCzcuh",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "water_sport",
              "name_en": "Water Sport",
              "name_vn": "Môn thể thao dưới nước",
              "description_en": "Offers water sports",
              "description_vn": "Có dịch vụ môn thể thao dưới nước"
            },
            {
              "id": "EBz22FXVX6hCwyH",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "snorkeling",
              "name_en": "Snorkeling",
              "name_vn": "Lặn ngắm san hô",
              "description_en": "Offers snorkeling",
              "description_vn": "Có dịch vụ lặn ngắm san hô"
            }
          ]
        },
        {
          "id": "3pf1vYp1UtYCdR",
          "status": 1,
          "created_at": "2024-03-24T12:47:35+07:00",
          "updated_at": "2024-03-24T12:47:35+07:00",
          "name": "things_to_do",
          "name_en": "Thing to do",
          "name_vn": "Hoạt động giải trí",
          "facilities": [
            {
              "id": "EBz4ECuigWNQrA1",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "children_club_surcharge",
              "name_en": "Children Club Surcharge",
              "name_vn": "Phụ phí câu lạc bộ trẻ em",
              "description_en": "Charges a surcharge for the children's club",
              "description_vn": "Tính phụ phí cho câu lạc bộ trẻ em"
            },
            {
              "id": "EC3E3iR6Lu9dTHB",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "water_park_access_surcharge",
              "name_en": "Water Park Access Surcharge",
              "name_vn": "Phụ phí vào công viên nước",
              "description_en": "Charges a surcharge for water park access",
              "description_vn": "Tính phụ phí để vào công viên nước"
            },
            {
              "id": "EC3FYXHqbydJx5m",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "massage",
              "name_en": "Massage",
              "name_vn": "Massage",
              "description_en": "Offers massage services",
              "description_vn": "Có dịch vụ massage"
            },
            {
              "id": "EC3HkUiBGYLH8G3",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "hot_tub",
              "name_en": "Hot Tub",
              "name_vn": "Bồn tắm nước nóng",
              "description_en": "Has a hot tub",
              "description_vn": "Có bồn tắm nước nóng"
            },
            {
              "id": "EC3KxS6PxJY1AGw",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "fitness_center",
              "name_en": "Fitness Center",
              "name_vn": "Trung tâm thể dục",
              "description_en": "Has a fitness center",
              "description_vn": "Có trung tâm thể dục"
            },
            {
              "id": "EC6V4djVUrrKR3b",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "steamroom",
              "name_en": "Steamroom",
              "name_vn": "Phòng xông hơi",
              "description_en": "Has a steamroom",
              "description_vn": "Có phòng xông hơi"
            },
            {
              "id": "EC6XGb9q9RXre33",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "spa",
              "name_en": "Spa",
              "name_vn": "Spa",
              "description_en": "Has a spa",
              "description_vn": "Có spa"
            },
            {
              "id": "EC6ZUYY3q5UJfqh",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "outdoor_pool",
              "name_en": "Outdoor Pool",
              "name_vn": "Hồ bơi ngoài trời",
              "description_en": "Has an outdoor pool",
              "description_vn": "Có hồ bơi ngoài trời"
            },
            {
              "id": "EC6ayMSubJykSdq",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "garden",
              "name_en": "Garden",
              "name_vn": "Vườn",
              "description_en": "Has a garden",
              "description_vn": "Có vườn"
            },
            {
              "id": "EC9knrvBEJVPbQb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "health_club",
              "name_en": "Health Club",
              "name_vn": "Câu lạc bộ sức khỏe",
              "description_en": "Has a health club",
              "description_vn": "Có câu lạc bộ sức khỏe"
            },
            {
              "id": "EC9nzpLWR7SAwwj",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "sauna",
              "name_en": "Sauna",
              "name_vn": "Phòng xông hơi khô",
              "description_en": "Has a sauna",
              "description_vn": "Có phòng xông hơi khô"
            },
            {
              "id": "EC9pVdDFgBwH5Hb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "spa_tub",
              "name_en": "Spa Tub",
              "name_vn": "Bồn tắm spa",
              "description_en": "Has a spa tub",
              "description_vn": "Có bồn tắm spa"
            },
            {
              "id": "EC9rhRGndbrYBKM",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "children_pool",
              "name_en": "Children Pool",
              "name_vn": "Hồ bơi trẻ em",
              "description_en": "Has a children's pool",
              "description_vn": "Có hồ bơi dành cho trẻ em"
            },
            {
              "id": "ECD2WvnAHtM3WPu",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "pool_cabanas",
              "name_en": "Pool Cabanas",
              "name_vn": "Lều bên hồ bơi",
              "description_en": "Has pool cabanas",
              "description_vn": "Có lều bên hồ bơi"
            },
            {
              "id": "ECD41jev2psd6tF",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "barbecue_grill",
              "name_en": "Barbecue Grill",
              "name_vn": "Bếp nướng ngoài trời",
              "description_en": "Has barbecue grills",
              "description_vn": "Có bếp nướng ngoài trời"
            },
            {
              "id": "ECD6Dh5FDdpQ8hb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "picnic_area",
              "name_en": "Picnic Area",
              "name_vn": "Khu vực dã ngoại",
              "description_en": "Has a picnic area",
              "description_vn": "Có khu vực dã ngoại"
            },
            {
              "id": "ECGG3CYWNsbHR6H",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "children_club",
              "name_en": "Children Club",
              "name_vn": "Câu lạc bộ trẻ em",
              "description_en": "Has a children's club",
              "description_vn": "Có câu lạc bộ trẻ em"
            },
            {
              "id": "ECGJF9xr3SGpxjH",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "pool_sun_loungers",
              "name_en": "Pool Sun Loungers",
              "name_vn": "Ghế tắm nắng bên hồ bơi",
              "description_en": "Has pool sun loungers",
              "description_vn": "Có ghế tắm nắng bên hồ bơi"
            },
            {
              "id": "ECGKjoWu6QkheLb",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "beach_sun_loungers",
              "name_en": "Beach Sun Loungers",
              "name_vn": "Ghế tắm nắng bãi biển",
              "description_en": "Has beach sun loungers",
              "description_vn": "Có ghế tắm nắng bãi biển"
            },
            {
              "id": "ECGMwku7nAxS15H",
              "status": 1,
              "created_at": "2024-03-24T12:47:35+07:00",
              "updated_at": "2024-03-24T12:47:35+07:00",
              "name": "beach_towel",
              "name_en": "Beach Towel",
              "name_vn": "Khăn tắm bãi biển",
              "description_en": "Provides beach towels",
              "description_vn": "Cung cấp khăn tắm bãi biển"
            },
            {
              "id": "ECKXmGQVvDD89eV",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "beach_umbrella",
              "name_en": "Beach Umbrella",
              "name_vn": "Dù bãi biển",
              "description_en": "Provides beach umbrellas",
              "description_vn": "Cung cấp dù bãi biển"
            },
            {
              "id": "ECKZG5HFBPyWvZw",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "library",
              "name_en": "Library",
              "name_vn": "Thư viện",
              "description_en": "Has a library",
              "description_vn": "Có thư viện"
            },
            {
              "id": "ECKbU2haN6f1dXV",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "private_beach",
              "name_en": "Private Beach",
              "name_vn": "Bãi biển riêng",
              "description_en": "Has a private beach",
              "description_vn": "Có bãi biển riêng"
            },
            {
              "id": "ECKdfz5oXcbWBN3",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "private_beach_nearby",
              "name_en": "Private Beach Nearby",
              "name_vn": "Có bãi biển riêng gần đó",
              "description_en": "Has a private beach nearby",
              "description_vn": "Có bãi biển riêng gần đó"
            },
            {
              "id": "ECNnnM5hmRxoq91",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "turkish_bath",
              "name_en": "Turkish Bath",
              "name_vn": "Phòng tắm Thổ Nhĩ Kỳ",
              "description_en": "Has a Turkish bath",
              "description_vn": "Có phòng tắm Thổ Nhĩ Kỳ"
            },
            {
              "id": "ECNpz99EEyrbU2H",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "indoor_pool",
              "name_en": "Indoor Pool",
              "name_vn": "Hồ bơi trong nhà",
              "description_en": "Has an indoor pool",
              "description_vn": "Có hồ bơi trong nhà"
            },
            {
              "id": "ECNsC6ZZuYY91jX",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "waterslide",
              "name_en": "Waterslide",
              "name_vn": "Trượt nước",
              "description_en": "Has a waterslide",
              "description_vn": "Có trượt nước"
            },
            {
              "id": "ECNtguSKAd3F919",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "discounted_fitness_center",
              "name_en": "Discounted Fitness Center",
              "name_vn": "Trung tâm thể dục giảm giá",
              "description_en": "Offers discounted fitness center access",
              "description_vn": "Cung cấp trung tâm thể dục giảm giá"
            },
            {
              "id": "ECS4WQuaoipAwMV",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "beach_cabanas",
              "name_en": "Beach Cabanas",
              "name_vn": "Lều bãi biển",
              "description_en": "Has beach cabanas",
              "description_vn": "Có lều bãi biển"
            },
            {
              "id": "ECS6iNKuzRVfePH",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "marina",
              "name_en": "Marina",
              "name_vn": "Cảng tàu du lịch",
              "description_en": "Has a marina",
              "description_vn": "Có cảng tàu du lịch"
            },
            {
              "id": "ECS8DBCfFcG4REV",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "water_park_access",
              "name_en": "Water Park Access",
              "name_vn": "Tiếp cận công viên nước",
              "description_en": "Offers water park access",
              "description_vn": "Có sự tiếp cận công viên nước"
            },
            {
              "id": "ECVJ2XPMBYVX89P",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "swimup_bar",
              "name_en": "Swimup Bar",
              "name_vn": "Quầy bar trong hồ bơi",
              "description_en": "Has a swim-up bar",
              "description_vn": "Có quầy bar trong hồ bơi"
            },
            {
              "id": "ECVLEUmZsJhFUoq",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "casino",
              "name_en": "Casino",
              "name_vn": "Sòng bạc",
              "description_en": "Has a casino",
              "description_vn": "Có sòng bạc"
            },
            {
              "id": "ECVMjHgRdRwQvkB",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "tv_lounge",
              "name_en": "Tv Lounge",
              "name_vn": "Phòng nghỉ xem TV",
              "description_en": "Has a TV lounge",
              "description_vn": "Có phòng nghỉ xem TV"
            },
            {
              "id": "ECVPwF4enwsu9rw",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "children_play_area",
              "name_en": "Children Play Area",
              "name_vn": "Khu vui chơi trẻ em",
              "description_en": "Has a children's play area",
              "description_vn": "Có khu vui chơi dành cho trẻ em"
            },
            {
              "id": "ESNAgNnqhdiwT1F",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "indoor_freshwater_pool",
              "name_en": "Indoor Freshwater Pool",
              "name_vn": "Hồ bơi nước ngọt trong nhà",
              "description_en": "Has an indoor freshwater pool",
              "description_vn": "Có hồ bơi nước ngọt trong nhà"
            },
            {
              "id": "ESNCtLDAtLP1Xa1",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "indoor_heated_pool",
              "name_en": "Indoor Heated Pool",
              "name_vn": "Hồ bơi nước nóng trong nhà",
              "description_en": "Has an indoor heated pool",
              "description_vn": "Có hồ bơi nước nóng trong nhà"
            },
            {
              "id": "ESNENymERArw3nX",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "outdoor_freshwater_pool",
              "name_en": "Outdoor Freshwater Pool",
              "name_vn": "Hồ bơi nước ngọt ngoài trời",
              "description_en": "Has an outdoor freshwater pool",
              "description_vn": "Có hồ bơi nước ngọt ngoài trời"
            },
            {
              "id": "ESNGawBZbsYRkpK",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "outdoor_saltwater_pool",
              "name_en": "Outdoor Saltwater Pool",
              "name_vn": "Hồ bơi",
              "description_en": "Has salt water pool",
              "description_vn": "Có hồ bơi nước mặn"
            },
            {
              "id": "ESRSQSepmDabN4o",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "transportation",
              "name_en": "Transportation",
              "name_vn": "Phương tiện di chuyển",
              "description_en": "",
              "description_vn": ""
            },
            {
              "id": "ESRTuFZh16ZWgJy",
              "status": 1,
              "created_at": "2024-03-24T12:47:36+07:00",
              "updated_at": "2024-03-24T12:47:36+07:00",
              "name": "traveling_with_others",
              "name_en": "Traveling With Others",
              "name_vn": "Đi cùng người khác",
              "description_en": "",
              "description_vn": ""
            }
          ]
        }
      ]
    }
    const allProperty = 
      facility_data.data && 
      facility_data.data.map && 
      facility_data.data.map(facility => (
        <li key={facility.id}>
          <FacilitiesProperty data={facility}/>
        </li>
      ));
    return ( 
        <div className="CH_PropertyFacilities-Container">
            <div className="CH_PropertyFacilities-Header">
                Property Facilities
            </div>
            <div className="CH_PropertyFacilities-Main">
              <ul>
                {allProperty}
              </ul>
            </div>
        </div>
     );
}
 
export default CH_PropertyFacilities;