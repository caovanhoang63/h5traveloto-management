import img_Logo from "../../assets/icons/logo.png"
import img_LogoFull from "../../assets/icons/logofull.png"
import {Fragment, useState} from "react";
import "./sidebar.css";
import ico_arrow_line_left from "../../assets/icons/arrow-line-left.png";
import ico_arrow_line_left_active from "../../assets/icons/arrow-line-left-active.png";
import Sidebar_tab from "./sidebar_tab";

const Sidebar = ({data}) => {

	const [isToggleSideBar, setToggleSideBar] = useState(false);
	const [activeTab, setActiveTab] = useState(null);

	const handleClick_MenuBtn = () => { 
		if (isToggleSideBar)
		{
			setToggleSideBar(false);
		}
		else
		{
			setToggleSideBar(true);
		}
	};
	const hanldeClick_Tab = (tab, tabs) => {
		setActiveTab(tab);
	}
	
	const tabs = data && data.map && data.map(tab => (
		<li key={tab.id} onClick={() => {hanldeClick_Tab(tab, tabs)}}>
			<Sidebar_tab
				img={tab.ico} 
				img_active={tab.active_ico} 
				content={tab.content} 
				isToggle={isToggleSideBar} 
				isActive={tab === activeTab}
				/>
		</li>
	));

	return (
		<div className={"sidebar-container"}>
			<div className={'sidebar' + (isToggleSideBar ? ' active' : '') }>
				<div className="menu-btn" onClick={handleClick_MenuBtn}>
					<img src={ico_arrow_line_left} alt="" />
				</div>
				<div className="head">
					<div className={'logo' + (isToggleSideBar ? ' active' : '')}>
						<img src={img_Logo} alt=""/>
					</div>
					<div className={'logo-full' + (isToggleSideBar ? '' : ' active')}>
						<img src={img_LogoFull} alt=""/>
					</div>
				</div>
				<div className="nav">
					<div className="menu">
						<ul>
							{tabs}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Sidebar;

// import Sidebar from './components/sidebar/sidebar';
// import ico_home from "./assets/icons/home.png";
// import ico_home_active from "./assets/icons/home-active.png";
// import ico_edit from "./assets/icons/edit.png";
// import ico_edit_active from "./assets/icons/edit-active.png";
// import ico_check_file from "./assets/icons/check-file.png";
// import ico_check_file_active from "./assets/icons/check-file-active.png";
// import ico_bookmark from "./assets/icons/bookmark.png";
// import ico_bookmark_active from "./assets/icons/bookmark-active.png";
// import ico_tag from "./assets/icons/tag.png";
// import ico_tag_active from "./assets/icons/tag-active.png";
// import ico_dollar_circle from "./assets/icons/dollar-circle.png";
// import ico_dollar_circle_active from "./assets/icons/dollar-circle-active.png";

// const sidebar_data = [
//   {
//     id: 0,
//     ico: ico_home,
//     active_ico: ico_home_active,
//     content: "Dashboard",
//     isToggle: true,
//     isActive: false
//   },
//   {
//     id: 1,
//     ico: ico_edit,
//     active_ico: ico_edit_active,
//     content: "Front desk",
//     isToggle: true,
//     isActive: false
//   },
//   {
//     id: 2,
//     ico: ico_check_file,
//     active_ico: ico_check_file_active,
//     content: "Guest",
//     isToggle: true,
//     isActive: false
//   },
//   {
//     id: 3,
//     ico: ico_bookmark,
//     active_ico: ico_bookmark_active,
//     content: "Rooms",
//     isToggle: true,
//     isActive: false
//   },
//   {
//     id: 4,
//     ico: ico_tag,
//     active_ico: ico_tag_active,
//     content: "Deal",
//     isToggle: true,
//     isActive: false
//   },
//   {
//     id: 5,
//     ico: ico_dollar_circle,
//     active_ico: ico_dollar_circle_active,
//     content: "Rate",
//     isToggle: true,
//     isActive: false
//   }
// ];

// function App() {
//   return (
//     <div>
//       <Sidebar data={sidebar_data}></Sidebar>
//     </div>
//   );
// }