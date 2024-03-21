import img_Logo from "../../assets/logo.png"
import img_LogoFull from "../../assets/logofull.png"
import { useState } from "react";
import "./sidebar.css";
import { 
	ArrowLineLeft,
	House, 
	NotePencil, 
	Users, 
	BookmarkSimple,
	Tag,
	CurrencyCircleDollar
} from "@phosphor-icons/react/dist/ssr";
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
		<div className="container">
			<div className={'sidebar' + (isToggleSideBar ? ' active' : '') }>
				<div className="menu-btn" onClick={handleClick_MenuBtn}>
					<ArrowLineLeft size={16}/>
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