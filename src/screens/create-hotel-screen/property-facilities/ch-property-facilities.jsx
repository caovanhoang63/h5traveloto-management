import FacilitiesProperty from "../../../components/facilities property/facilities-property";
import "./ch-property-facilities.css";

const CH_PropertyFacilities = () => {
    const data = {
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
      }

    return ( 
        <div className="CH_PropertyFacilities-Container">
            <div className="CH_PropertyFacilities-Header">
                Property Facilities
            </div>
            <div className="CH_PropertyFacilities-Main">
                <FacilitiesProperty data={data}/>
            </div>
        </div>
     );
}
 
export default CH_PropertyFacilities;