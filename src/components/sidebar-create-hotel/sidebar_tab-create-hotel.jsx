import { useState } from "react";
import "./sidebar_tab-create-hotel.css";
import { NavLink, Outlet, BrowserRouter } from "react-router-dom";
const SidebarTabCreateHotel = ({content, navigate, taskNum, isActive}) => {    
    return ( 
        <div className={"sidebar-tab-ch" + (isActive ? ' active' : '')}>
            <a href="">
                <div className="sidebar-tab-ch-content">{content}</div>
                <div className={"sidebar-tab-ch-tasknum" + ( (taskNum==0)? ' finished': '')}>{taskNum}</div>
            </a>
        </div>
     );
}
 
export default SidebarTabCreateHotel;