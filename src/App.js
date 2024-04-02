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
import LoginScreen from "./screens/login-screen/login-screen";
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
    const feedbackdata = {
        "data": [
            {
                "id": "66097b00898579fbdf72e9b9",
                "status": 1,
                "created_at": "2024-03-31T15:02:24.805Z",
                "updated_at": "2024-03-31T15:02:24.805Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b51d7bcf2dcecb9175a",
                "status": 1,
                "created_at": "2024-03-31T15:03:45.85Z",
                "updated_at": "2024-03-31T15:03:45.85Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b53d7bcf2dcecb9175b",
                "status": 1,
                "created_at": "2024-03-31T15:03:47.886Z",
                "updated_at": "2024-03-31T15:03:47.886Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b57d7bcf2dcecb9175c",
                "status": 1,
                "created_at": "2024-03-31T15:03:51.817Z",
                "updated_at": "2024-03-31T15:03:51.817Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097b7d5db64c13350552cd",
                "status": 1,
                "created_at": "2024-03-31T15:04:29.237Z",
                "updated_at": "2024-03-31T15:04:29.237Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097baaa8e482fdd650f2f0",
                "status": 1,
                "created_at": "2024-03-31T15:05:14.255Z",
                "updated_at": "2024-03-31T15:05:14.255Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097bc4290d65dbe4d54075",
                "status": 1,
                "created_at": "2024-03-31T15:05:40.362Z",
                "updated_at": "2024-03-31T15:05:40.362Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097bd4ea9b21865cc98b8d",
                "status": 1,
                "created_at": "2024-03-31T15:05:56.36Z",
                "updated_at": "2024-03-31T15:05:56.36Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c613fa8c49b7c928162",
                "status": 1,
                "created_at": "2024-03-31T15:08:17.714Z",
                "updated_at": "2024-03-31T15:08:17.714Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c75c47a65b8c302835a",
                "status": 1,
                "created_at": "2024-03-31T15:08:37.938Z",
                "updated_at": "2024-03-31T15:08:37.938Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c77c47a65b8c302835b",
                "status": 1,
                "created_at": "2024-03-31T15:08:39.775Z",
                "updated_at": "2024-03-31T15:08:39.775Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097c92bfeb4540bb0c56d2",
                "status": 1,
                "created_at": "2024-03-31T15:09:06.791Z",
                "updated_at": "2024-03-31T15:09:06.791Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097cad9d188bf926fa8aef",
                "status": 1,
                "created_at": "2024-03-31T15:09:33.658Z",
                "updated_at": "2024-03-31T15:09:33.658Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d08dd477c82283c623e",
                "status": 1,
                "created_at": "2024-03-31T15:11:04.674Z",
                "updated_at": "2024-03-31T15:11:04.674Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d1e46864a53fd539cd8",
                "status": 1,
                "created_at": "2024-03-31T15:11:26.152Z",
                "updated_at": "2024-03-31T15:11:26.152Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2046864a53fd539cd9",
                "status": 1,
                "created_at": "2024-03-31T15:11:28.42Z",
                "updated_at": "2024-03-31T15:11:28.42Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2146864a53fd539cda",
                "status": 1,
                "created_at": "2024-03-31T15:11:29.512Z",
                "updated_at": "2024-03-31T15:11:29.512Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2346864a53fd539cdb",
                "status": 1,
                "created_at": "2024-03-31T15:11:31.01Z",
                "updated_at": "2024-03-31T15:11:31.01Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66097d2446864a53fd539cdc",
                "status": 1,
                "created_at": "2024-03-31T15:11:32.47Z",
                "updated_at": "2024-03-31T15:11:32.47Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 1,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0bc0c52ee239ea5b79",
                "status": 1,
                "created_at": "2024-03-31T17:14:51.14Z",
                "updated_at": "2024-03-31T17:14:51.14Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0bc0c52ee239ea5b7a",
                "status": 1,
                "created_at": "2024-03-31T17:14:51.764Z",
                "updated_at": "2024-03-31T17:14:51.764Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0cc0c52ee239ea5b7b",
                "status": 1,
                "created_at": "2024-03-31T17:14:52.436Z",
                "updated_at": "2024-03-31T17:14:52.436Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0dc0c52ee239ea5b7c",
                "status": 1,
                "created_at": "2024-03-31T17:14:53.16Z",
                "updated_at": "2024-03-31T17:14:53.16Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a0dc0c52ee239ea5b7d",
                "status": 1,
                "created_at": "2024-03-31T17:14:53.825Z",
                "updated_at": "2024-03-31T17:14:53.825Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 9,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a12c0c52ee239ea5b7e",
                "status": 1,
                "created_at": "2024-03-31T17:14:58.223Z",
                "updated_at": "2024-03-31T17:14:58.223Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a12c0c52ee239ea5b7f",
                "status": 1,
                "created_at": "2024-03-31T17:14:58.904Z",
                "updated_at": "2024-03-31T17:14:58.904Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a13c0c52ee239ea5b80",
                "status": 1,
                "created_at": "2024-03-31T17:14:59.52Z",
                "updated_at": "2024-03-31T17:14:59.52Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a14c0c52ee239ea5b81",
                "status": 1,
                "created_at": "2024-03-31T17:15:00.229Z",
                "updated_at": "2024-03-31T17:15:00.229Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 10,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a17c0c52ee239ea5b82",
                "status": 1,
                "created_at": "2024-03-31T17:15:03.305Z",
                "updated_at": "2024-03-31T17:15:03.305Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a18c0c52ee239ea5b83",
                "status": 1,
                "created_at": "2024-03-31T17:15:04.003Z",
                "updated_at": "2024-03-31T17:15:04.003Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a18c0c52ee239ea5b84",
                "status": 1,
                "created_at": "2024-03-31T17:15:04.613Z",
                "updated_at": "2024-03-31T17:15:04.613Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a19c0c52ee239ea5b85",
                "status": 1,
                "created_at": "2024-03-31T17:15:05.279Z",
                "updated_at": "2024-03-31T17:15:05.279Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            },
            {
                "id": "66099a19c0c52ee239ea5b86",
                "status": 1,
                "created_at": "2024-03-31T17:15:05.85Z",
                "updated_at": "2024-03-31T17:15:05.85Z",
                "user_id": "3mKb6KJ4zi7t8Q",
                "hotel_id": "3mKb6KGah2LTSU",
                "booking_id": "4DPZuKkQ5CZykg",
                "room_type_id": "3stY2v2wYdkY7g",
                "rating": 5,
                "comment": "phong nhu cai lon  tao vay do"
            }
        ],
        "paging": {
            "limit": 50,
            "page": 1,
            "total": 33,
            "cursor": "",
            "next_cursor": "66099a19c0c52ee239ea5b86"
        },
        "filter": {
            "user_id": null,
            "hotel_id": null,
            "booking_id": null,
            "room_type_id": null,
            "rating": 0
        }
    }
    return (
        /*<MainLayout >
            <Dashboard roomsdata={data} feedbackdata={feedbackdata} />
        </MainLayout>*/
        <LoginScreen />


    )
}

export default App;