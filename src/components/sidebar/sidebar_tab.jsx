import "./sidebar_tab.css";

const Sidebar_tab = ({img, img_active, content, isToggle = true, isActive = false}) => {
	
	return ( 
		<div className={'tab' + (isToggle ? ' untoggle' : '') + (isActive ? ' active' : '')}>
			<a href="#">
				<img className="unactive-ico" src={img} alt="" />
				<img className="active-ico" src={img_active} alt="" />
				<span className="text">{content}</span>
			</a>
		</div>
	);
}
 
export default Sidebar_tab;