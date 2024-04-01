const SidebarTabCreateHotel = ({content, taskNum}) => {
    return ( 
        <div>
            <a href="#">
                <div>{content}</div>
                <div>{taskNum}</div>
            </a>
        </div>
     );
}
 
export default SidebarTabCreateHotel;