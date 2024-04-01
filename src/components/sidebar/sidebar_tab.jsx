import "./sidebar_tab.css";

const Sidebar_tab = ({img, img_active, content, isToggle = true, isActive = false}) => {
	
	return ( 
		<div className={'sidebar-tab' + (isToggle ? ' untoggle' : '') + (isActive ? ' active' : '')}>
			<a href="#">
				<img className="sidebar-tab-unactive-ico" src={img} alt="" />
				<img className="sidebar-tab-active-ico" src={img_active} alt="" />
				<span className="sidebar-tab-text">{content}</span>
			</a>
		</div>
	);
}
 
export default Sidebar_tab;