import SearchBar from "../../components/searchbar/searchbar";
import Sidebar from "../../components/sidebar/sidebar";
import Table from "../../components/table/table";
import Combobox from "../../components/combobox/combobox";
import ico_home from "../../assets/icons/home.png";
import ico_home_active from "../../assets/icons/home-active.png";
import ico_edit from "../../assets/icons/edit.png";
import ico_edit_active from "../../assets/icons/edit-active.png";
import ico_check_file from "../../assets/icons/check-file.png";
import ico_check_file_active from "../../assets/icons/check-file-active.png";
import ico_bookmark from "../../assets/icons/bookmark.png";
import ico_bookmark_active from "../../assets/icons/bookmark-active.png";
import ico_tag from "../../assets/icons/tag.png";
import ico_tag_active from "../../assets/icons/tag-active.png";
import ico_dollar_circle from "../../assets/icons/dollar-circle.png";
import ico_dollar_circle_active from "../../assets/icons/dollar-circle-active.png";
import ico_calendar from "../../assets/icons/calendar.png";
import ico_calendar_active from "../../assets/icons/calendar-active.png";
import ico_bubble_chat from "../../assets/icons/bubble-chat.png";
import ico_bubble_chat_active from "../../assets/icons/bubble-chat-active.png";
import "./main-layout.css";
import RoomPage from "../../screens/room-screen/room-page.jsx";
import RoomTypePage from "../../screens/room-type-screen/room-type-page.jsx";

const sidebar_data = [
    {
        id: 0,
        ico: ico_home,
        active_ico: ico_home_active,
        content: "Dashboard",
        isToggle: true,
        isActive: false,
        navLink: "/dashboard",
    },
    {
        id: 1,
        ico: ico_edit,
        active_ico: ico_edit_active,
        content: "Front desk",
        isToggle: true,
        isActive: false,
        navLink: "/frontdesk",
    },
    {
        id: 2,
        ico: ico_check_file,
        active_ico: ico_check_file_active,
        content: "Guest",
        isToggle: true,
        isActive: false,
        navLink: "/guest",
    },
    {
        id: 3,
        ico: ico_bookmark,
        active_ico: ico_bookmark_active,
        content: "Rooms",
        isToggle: true,
        isActive: false,
        navLink: "/rooms",
    },
    {
        id: 4,
        ico: ico_tag,
        active_ico: ico_tag_active,
        content: "Deal",
        isToggle: true,
        isActive: false,
        navLink: "/deal",
    },
    {
        id: 5,
        ico: ico_dollar_circle,
        active_ico: ico_dollar_circle_active,
        content: "Room Types",
        isToggle: true,
        isActive: false,
        navLink: "/roomtypes",
    },
    {
        id: 6,
        ico: ico_calendar,
        active_ico: ico_calendar_active,
        content: "Booking Management",
        isToggle: true,
        isActive: false,
        navLink: "/bookingmanagement",
    },
    {
        id: 7,
        ico: ico_bubble_chat,
        active_ico: ico_bubble_chat_active,
        content: "Chat",
        isToggle: true,
        isActive: false,
        navLink: "/chat",
    },
];

const MainLayout = ({ screenName = "screen name", ...props }) => {
    const options = [{ value: "tuoi" }, { value: "báo" }, { value: "s" }];
    return (
        <div>
            <div className={"container"}>
                <Sidebar className={"sidebar"} data={sidebar_data}></Sidebar>
                <div className={"content-container"}>
                    <header className={"header"}>
                        <div className={"header-content"}>
                            <SearchBar
                                className={"searchBar--position top50"}
                            />
                            <div className={"header-buttons"}>
                                <span>12</span>
                                <span>32</span>
                            </div>
                        </div>
                    </header>
                    <div className={"content"}>
                        <div className={"screen-name"}>
                            <span>{screenName}</span>
                        </div>
                        <div className={"screen-content"}>{props.children}</div>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    );
};

export default MainLayout;
