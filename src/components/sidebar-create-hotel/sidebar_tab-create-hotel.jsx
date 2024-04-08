import { Link } from "react-router-dom";
import "./sidebar_tab-create-hotel.css";
const SidebarTabCreateHotel = ({content, navigate, taskNum, isActive}) => {    
    return ( 
        <div className={"sidebar-tab-ch" + (isActive ? ' active' : '')}>
            <Link to={navigate}>
                <div className="sidebar-tab-ch-content">{content}</div>
                <div className={"sidebar-tab-ch-tasknum" + ( (taskNum==0)? ' finished': '')}>{taskNum}</div>
            </Link>
        </div>
     );
}
 
export default SidebarTabCreateHotel;