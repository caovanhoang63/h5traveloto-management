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
import doraemon from "../../assets/icons/doraemon.jpg";
import avatar from "../../assets/icons/icon_avatar.png";
import "./main-layout.css";
import RoomPage from "../../screens/room-screen/room-page.jsx";
import RoomTypePage from "../../screens/room-type-screen/room-type-page.jsx";
import {useEffect, useState} from "react";
import Modal from "../../components/modal/modal";
import ModalCreateRoom from "../../components/modal/content/create-room/modal-create-room";
import ModalInfoCustomer from "../../components/modal/content/info-customer/modal-info-customer";
import ModalChangeInfo from "../../components/modal/content/change-info/modal-change-info";
import {changeProfile, getProfile} from "../../api/profile_api";
import {getHotelChats} from "../../api/chat_api";
import {createRoom} from "../../api/room_api";
import Toast from "../../components/modal/toast";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom"
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
        content: "Employee",
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
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isOpenModalInfo, setOpenModalInfo] = useState(false);
    const [isOpenModalSetting, setOpenModalSetting] = useState(false);
    const token = sessionStorage.getItem("access-token")
    const [profile,setProfile] = useState(null)
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    //Modal
    const [preProfileName, setPreProfileName] = useState("");
    const [preFirstName, setPreFirstName] = useState("");
    const [preLastName, setPreLastName] = useState("");
    const [preProfilePhone, setPreProfilePhone] = useState("");
    const [preProfileBirth, setPreProfileBirth] = useState("");

    const [profileName, setProfileName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profilePhone, setProfilePhone] = useState("");
    const [profileBirth, setProfileBirth] = useState("");
    const [options, setOptions] = useState([]);
    const handleOnChangeProfileName = (value) => {
        console.log(value);
        setProfileName(value);
        let name = value.split(" ");
        if(name.length > 1){
            setLastName(name[name.length - 1]);
            setFirstName(name.slice(0, -1).join(" "));
        } else{
            setFirstName(name);
        }

    };
    const handleOnChangeProfilePhone = (value) => {
        setProfilePhone(value);
    };
    const handleOnChangeProfileBirth = (value) => {
        setProfileBirth(format(value,"dd-MM-yyyy"));
    };

    const handleClickCreate = () => {
        setOpenModalInfo(false);
        console.log(profileName, profilePhone, profileBirth,lastName,firstName);
        console.log(preLastName, preFirstName, preProfilePhone,preProfileBirth);

        changeProfile({
            last_name: lastName===preLastName?null:lastName,
            first_name: firstName===preFirstName?null:firstName,
            phone: profilePhone===preProfilePhone?null:profilePhone,
            date_of_birth: profileBirth===preProfileBirth?null:profileBirth,
        })
            .then((res) => {
                Toast({ title: "Change information success", type: "success" });
                GetProfile();
            })
            .catch((e) => {
                Toast({ title: "Change information fail", type: "error" });
            });
    };
    useEffect(() => {
        GetProfile();
    }, [token]);

    const GetProfile = ()=>{
        getProfile()
            .then(res => {
                let profile = res.data;
                setProfile(profile)
                setFirstName(profile.first_name)
                setLastName(profile.last_name)
                setProfileName(profile.first_name + " " + profile.last_name);
                setProfileBirth(profile.date_of_birth)

                setPreFirstName(profile.first_name)
                setPreLastName(profile.last_name)
                setPreProfileName(profile.first_name + " " + profile.last_name);
                setPreProfileBirth(profile.date_of_birth)
                setPreProfileBirth(profile.phone)
                console.log("profile",profile)
            })
            .catch((e) => {
                console.log(e);
            })
    }
    const navigate = useNavigate();

    const handleLogout = () => {
        // Xóa token khỏi localStorage
        //localStorage.removeItem('token');
        sessionStorage.removeItem("access-token");
        // Điều hướng người dùng đến trang đăng nhập hoặc trang chủ
        navigate('/login')
    };
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
                            <div className="avatar-container" onClick={toggleDropdown}>
                                <img src={avatar} alt="Avatar" className="avatar"/>
                                {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item"
                                        onClick={()=> setOpenModalInfo(true)}
                                        >Profile</div>
                                        <div className="dropdown-item"
                                             onClick={()=>{handleLogout()}}
                                        >Logout</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>
                    {isOpenModalInfo && (
                        <Modal
                            content={
                                <ModalChangeInfo
                                    props={profile}
                                    onChangeBirth={handleOnChangeProfileBirth}
                                    onChangeName={handleOnChangeProfileName}
                                    onChangePhone={handleOnChangeProfilePhone}
                                ></ModalChangeInfo>
                            }
                            onClose={() => setOpenModalInfo(false)}
                            onConfirm={() => handleClickCreate()}
                            title="Information"
                            buttonSaveText="Save"
                        ></Modal>
                    )}
                    <div className={"content"}>
                        <div className={"screen-name"}>
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
