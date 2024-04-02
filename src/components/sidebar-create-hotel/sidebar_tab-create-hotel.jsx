import { useState } from "react";
import "./sidebar_tab-create-hotel.css";
const SidebarTabCreateHotel = ({content, taskNum, isActive}) => {    
    return ( 
        <div className={"sidebar-tab-ch" + (isActive ? ' active' : '')}>
            <a href="#">
                <div className="sidebar-tab-ch-content">{content}</div>
                <div className={"sidebar-tab-ch-tasknum" + ( (taskNum==0)? ' finished': '')}>{taskNum}</div>
            </a>
        </div>
     );
}
 
export default SidebarTabCreateHotel;