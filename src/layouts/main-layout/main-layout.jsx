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
import './main-layout.css';


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

const MainLayout = (props) => {
    const options = [
        { value: 'tuoi' },
        { value: 'báo'},
        { value: 's' },
    ];
    return (
        <div>
            <div className={"container"}>
                <Sidebar className={"sidebar"} data={sidebar_data}></Sidebar>
                <div className={"content-container"}>
                    <header className={"header"}>
                        <div className={"header-content"}>
                            <SearchBar/>
                        </div>
                    </header>
                    <div className={"content"}>
                        <div className={"screen-name"}>
                            <span >{props.screenName}</span>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
}

export default MainLayout;