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

function menuBtn () { 
	let sidebar = document.querySelector(".sidebar");
	let logofull = document.querySelector(".logo-full");
	let logo = document.querySelector(".logo");
	sidebar.classList.toggle('active');
	logofull.classList.toggle('active');
	logo.classList.toggle('active');
}
function navigate(landing) {
	let btn_dashboard = document.querySelector(".nav-dashboard");
	let btn_frontdesk =  document.querySelector(".nav-frontdesk");
	let btn_guest =  document.querySelector(".nav-guest");
	let btn_rooms =  document.querySelector(".nav-rooms");
	let btn_deal =  document.querySelector(".nav-deal");
	let btn_rate =  document.querySelector(".nav-rate");

	btn_dashboard.classList.remove('active');
	btn_frontdesk.classList.remove('active');
	btn_guest.classList.remove('active');
	btn_rooms.classList.remove('active');
	btn_deal.classList.remove('active');
	btn_rate.classList.remove('active');

	switch (landing) {
		case "dashboard":
			btn_dashboard.classList.toggle('active');
			break;
		case "frontdesk":
			btn_frontdesk.classList.toggle('active');
			break;
		case "guest":
			btn_guest.classList.toggle('active');
			break;
		case "room":
			btn_rooms.classList.toggle('active');
			break;
		case "deal":
			btn_deal.classList.toggle('active');
			break;
		case "rate":
			btn_rate.classList.toggle('active');
			break;
	}
}

const Sidebar = () => {
	return ( 
		<div className="container">
			<div className="sidebar">
				<div className="menu-btn" onClick={menuBtn}>
					<ArrowLineLeft size={16}/>
				</div>
				<div className="head">
					<div className="logo">
						<img src="./images/logo.png" alt=""/>
					</div>
					<div className="logo-full active">
						<img src="./images/logofull.png" alt=""/>
					</div>
				</div>
			<div className="nav">
				<div className="menu">
					<ul>
						<li className="nav-dashboard" onClick={() => {navigate("dashboard")}}>
							<a href="#">
								<House size={32} />
								<span className="text">Dashboard</span>
							</a>
						</li>
						<li className="nav-frontdesk" onClick={() => {navigate("frontdesk")}}>
							<a href="#">
								<NotePencil size={32} />
								<span className="text">Front desk</span>
							</a>
						</li>
						<li className="nav-guest" onClick={() => {navigate("guest")}}>
							<a href="#">
								<Users size={32} />
								<span className="text">Guest</span>
							</a>
						</li>
						<li className="nav-rooms" onClick={() => {navigate("rooms")}}>
							<a href="#">
								<BookmarkSimple size={32}/>
								<span className="text">Rooms</span>
							</a>
						</li>
						<li className="nav-deal" onClick={() => {navigate("deal")}}>
							<a href="#">
								<Tag size={32}/>
								<span className="text">Deal</span>
							</a>
						</li>
						<li className="nav-rate" onClick={() => {navigate("rate")}}>
							<a href="#">
								<CurrencyCircleDollar size={32}/>
								<span className="text">Rate</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	);
}
 
export default Sidebar;