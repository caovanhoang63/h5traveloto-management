import { Link } from "react-router-dom";
import "./sidebar_tab.css";

const Sidebar_tab = ({
    img,
    img_active,
    content,
    isToggle = true,
    isActive = false,
    navLink = "/",
}) => {
    return (
        <div
            className={
                "tab" +
                (isToggle ? " untoggle" : "") +
                (isActive ? " active" : "")
            }
        >
            <Link to={navLink}>
                <img className="unactive-ico" src={img} alt="" />
                <img className="active-ico" src={img_active} alt="" />
                <span className="text">{content}</span>
            </Link>
        </div>
    );
};

export default Sidebar_tab;
