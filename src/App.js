import Button, {ButtonIconOnly, PrimaryButton, SecondaryButton, TransparentButton} from "./components/button/button";
import './App.css';
import ico_home from "./assets/icons/home.png";
import ico_home_active from "./assets/icons/home-active.png";
import ico_edit from "./assets/icons/edit.png";
import ico_edit_active from "./assets/icons/edit-active.png";
import ico_check_file from "./assets/icons/check-file.png";
import ico_check_file_active from "./assets/icons/check-file-active.png";
import ico_bookmark from "./assets/icons/bookmark.png";
import ico_bookmark_active from "./assets/icons/bookmark-active.png";
import ico_tag from "./assets/icons/tag.png";
import ico_tag_active from "./assets/icons/tag-active.png";
import ico_dollar_circle from "./assets/icons/dollar-circle.png";
import ico_dollar_circle_active from "./assets/icons/dollar-circle-active.png";
import ico_calendar from "./assets/icons/calendar.png";
import ico_calendar_active from "./assets/icons/calendar-active.png";
import ico_bubble_chat from "./assets/icons/bubble-chat.png";
import ico_bubble_chat_active from "./assets/icons/bubble-chat-active.png";
import MainLayout from "./layouts/main-layout/main-layout";
import Rooms from "./components/dashboard/rooms/rooms";
import Roomtag from "./components/dashboard/rooms/roomtag/roomtag";
import Overviewtag from "./components/dashboard/overview/overviewtag/overviewtag";
import Overview from "./components/dashboard/overview/overview";
import Dashboard from "./components/dashboard/dashboard";
const TABLE_ROWS = [
    {
        reservationId: "123",
        name: "John Michael",
        roomNumber: "a123",
        totalAmount: "200",
        amountPaid: "100",
        date: "23/04/18",
        status: "Clean"
    },
    {
        reservationId: "124",
        name: "Alexa Liras",
        roomNumber: "a124",
        totalAmount: "200",
        amountPaid: "100",
        date: "23/04/18",
        status: "Pick up"
    },
    {
        reservationId: "125",
        name: "Laurent Perrier",
        roomNumber: "a125",
        totalAmount: "200",
        amountPaid: "100",
        date: "19/09/17",
        status: "Inspected"
    },
    {
        reservationId: "126",
        name: "Michael Levi",
        roomNumber: "a126",
        totalAmount: "200",
        amountPaid: "100",
        date: "24/12/08",
        status: "Dirty"
    },
    {
        reservationId: "126",
        name: "Richard Gran",
        roomNumber: "a126",
        totalAmount: "200",
        amountPaid: "100",
        date: "04/10/21",
        status: "Inspected"
    },
];
const columns = [
    {
        Header: "Reservation ID",
        accessor: "reservationId",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Room Number",
        accessor: "roomNumber",
    },
    {
        Header: "Amount Paid",
        accessor: "amountPaid",
    },
    {
        Header: "Total Amount",
        accessor: "totalAmount",
    },
    {
        Header: "Status",
        accessor: "status",
    },

];
const sidebar_data = [
    {
        id: 0,
        ico: ico_home,
        active_ico: ico_home_active,
        content: "Dashboard",
        isToggle: true,
        isActive: false
    },
    {
        id: 1,
        ico: ico_edit,
        active_ico: ico_edit_active,
        content: "Front desk",
        isToggle: true,
        isActive: false
    },
    {
        id: 2,
        ico: ico_check_file,
        active_ico: ico_check_file_active,
        content: "Guest",
        isToggle: true,
        isActive: false
    },
    {
        id: 3,
        ico: ico_bookmark,
        active_ico: ico_bookmark_active,
        content: "Rooms",
        isToggle: true,
        isActive: false
    },
    {
        id: 4,
        ico: ico_tag,
        active_ico: ico_tag_active,
        content: "Deal",
        isToggle: true,
        isActive: false
    },
    {
        id: 5,
        ico: ico_dollar_circle,
        active_ico: ico_dollar_circle_active,
        content: "Room Types",
        isToggle: true,
        isActive: false
    },
    {
        id: 6,
        ico: ico_calendar,
        active_ico: ico_calendar_active,
        content: "Booking Management",
        isToggle: true,
        isActive: false
    },
    {
        id: 7,
        ico: ico_bubble_chat,
        active_ico: ico_bubble_chat_active,
        content: "Chat",
        isToggle: true,
        isActive: false
    }
];



function App() {
    const options = [
        { value: 'tuoi' },
        { value: 'báo'},
        { value: 's' },
    ];
    const data ={
        "data": [
            {
                "id": "3spqRymCox9Vqu",
                "status": 1,
                "created_at": "2024-03-20T15:04:24+07:00",
                "updated_at": "2024-03-28T08:20:27+07:00",
                "hotel_id": "3mKb6KGah2LTSU",
                "name": "Phòng đơn",
                "max_customer": 1,
                "area": 200,
                "bed": {
                    "single": 1,
                    "double": 0,
                    "king": 0,
                    "queen": 0,
                    "others": null
                },
                "price": 200000,
                "cur_available_room": 0,
                "images": null,
                "total_room": 12,
                "pay_in_hotel": true,
                "break_fast": false,
                "free_cancel": false,
                "rating": 0
            },
            {
                "id": "3srLErWTtTFdBm",
                "status": 1,
                "created_at": "2024-03-20T15:07:36+07:00",
                "updated_at": "2024-03-28T08:20:32+07:00",
                "hotel_id": "3mKb6KGah2LTSU",
                "name": "Phòng đôi",
                "max_customer": 2,
                "area": 200,
                "bed": {
                    "single": 0,
                    "double": 1,
                    "king": 0,
                    "queen": 0,
                    "others": null
                },
                "price": 200000,
                "cur_available_room": 0,
                "images": null,
                "total_room": 4,
                "pay_in_hotel": true,
                "break_fast": true,
                "free_cancel": false,
                "rating": 0
            },
            {
                "id": "3stY2v2wYdkY7f",
                "status": 1,
                "created_at": "2024-03-20T15:08:39+07:00",
                "updated_at": "2024-03-28T08:23:58+07:00",
                "hotel_id": "3mKb6KGah2LTSU",
                "name": "Phòng vip",
                "max_customer": 4,
                "area": 200,
                "bed": {
                    "single": 0,
                    "double": 1,
                    "king": 1,
                    "queen": 0,
                    "others": null
                },
                "price": 200000,
                "cur_available_room": 0,
                "images": null,
                "total_room": 13,
                "pay_in_hotel": true,
                "break_fast": true,
                "free_cancel": false,
                "rating": 0
            },
            {
                "id": "3w4MYRR5atSgm7",
                "status": 1,
                "created_at": "2024-03-20T15:17:52+07:00",
                "updated_at": "2024-03-20T09:07:32+07:00",
                "hotel_id": "3mKb6KGah2LTSU",
                "name": "Phòng president",
                "max_customer": 0,
                "area": 250,
                "bed": {
                    "single": 0,
                    "double": 0,
                    "king": 1,
                    "queen": 0,
                    "others": {
                        "sofa ": 1
                    }
                },
                "price": 200000,
                "cur_available_room": 0,
                "images": null,
                "total_room": 2,
                "pay_in_hotel": false,
                "break_fast": true,
                "free_cancel": false,
                "rating": 0
            }
        ],
        "paging": {
            "limit": 50,
            "page": 1,
            "total": 4,
            "cursor": "",
            "next_cursor": "3w4MYRR5atSgm7"
        },
        "filter": {
            "hotel_id": "3mKb6KGah2LTST",
            "bed": null,
            "break_fast": false,
            "free_cancel": false,
            "rating": 0,
            "max_price": 10000000000,
            "min_price": 0,
            "start_date": null,
            "end_date": null
        }
    }
    return (
        <MainLayout >
            <Dashboard data={data} />
        </MainLayout>


    )
}

export default App;