import SidebarTabCreateHotel from "./sidebar_tab-create-hotel";
import {useState} from "react";
import "./sidebar-create-hotel.css";

const SidebarCreateHotel = ({data, progress}) => {
	const [activeTab, setActiveTab] = useState(null);

	const hanldeClick_Tab = (tab) => {
		console.log(progress);
		setActiveTab(tab);
	}

	const tabs = data && data.map && data.map(tab => (
		<li key={tab.id} onClick={() => {hanldeClick_Tab(tab)}}>
			<SidebarTabCreateHotel 
			content={tab.content}
			navigate={tab.navigate}
			taskNum={tab.taskNum}
			isActive={tab === activeTab}
			/>
		</li>
	))

	return ( 
		<div className="sidebar-ch-container">
			<div className="sidebar-ch">
				<div className="sidebar-ch-menu">
					<ul>
						{tabs}
					</ul>
					<div className="sidebar-ch-progress">
						<div>{"Mandatory Field Progress: "+ progress + "%"}</div>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default SidebarCreateHotel;