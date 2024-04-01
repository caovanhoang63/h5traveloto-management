import SidebarTabCreateHotel from "./sidebar_tab-create-hotel";

const SidebarCreateHotel = ({data, finishPercent}) => {
	const tabs = data && data.map && data.map(tab => (
		<li key={tab.id}>
			<SidebarTabCreateHotel 
			content={tab.content}
			taskNum={tab.taskNum}
			/>
		</li>
	))

	return ( 
		<div className="SidebarCH-container">
			<div className="SidebarCH">
				<ul>
					{tabs}
				</ul>
			</div>
		</div>
	 );
}
 
export default SidebarCreateHotel;