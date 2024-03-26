import Table from "./components/table/table";
import SearchBar from "./components/searchbar/searchbar";
import Combobox from "./components/combobox/combobox";
import Button from "./components/button/button";
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
import Sidebar from "./components/sidebar/sidebar";
import MainLayout from "./layouts/main-layout/main-layout";
import LoginScreen from "./screens/login-screen/login-screen";
import SignupScreen from "./screens/signup-screen/signup-screen";
import {Layout} from "@phosphor-icons/react";
import Textbox from "./components/textbox/textbox";
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
    return (
        // <MainLayout ></MainLayout>
        <Button type="submit" src={ico_tag} text="hehe" positionIcon="left"></Button>
    )
}

export default App;