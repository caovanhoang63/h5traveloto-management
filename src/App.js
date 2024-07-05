import Button, {
    ButtonIconOnly,
    PrimaryButton,
    SecondaryButton,
    TransparentButton,
} from "./components/button/button";
import {
    BrowserRouter,
    Link,
    Routes,
    Route,
    useNavigate,
    Navigate,
} from "react-router-dom";
import "./App.css";

import MainLayout from "./layouts/main-layout/main-layout";
import Dashboard from "./screens/dashboard/dashboard";
import LoginScreen from "./screens/login-screen/login-screen";
import SignUpScreen from "./screens/signup-screen/signup-screen";
import RoomPage from "./screens/room-screen/room-page";
import ChatScreen from "./screens/chat-screen/chat-screen";
import RoomTypePage from "./screens/room-type-screen/room-type-page";
import CreateHotel from "./screens/create-hotel-screen/create-hotel-screen";
import CH_GeneralInformation from "./screens/create-hotel-screen/components/general-information/ch-general-information";
import CH_PropertyDetails from "./screens/create-hotel-screen/components/property-details/ch-property-details";
import CH_PropertyPolicies from "./screens/create-hotel-screen/components/property-policies/ch-property-policies";
import CH_PropertyFacilities from "./screens/create-hotel-screen/components/property-facilities/ch-property-facilities";
import CH_PhotosInformation from "./screens/create-hotel-screen/components/photos-information/ch-photos-information";
import CH_Payment from "./screens/create-hotel-screen/components/payment/ch-payment";
import GuestScreen from "./screens/guest-screen/guest-screen";


function App() {
    const isAuthenticated = !!localStorage.getItem("token");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/signup" element={<SignUpScreen/>}/>
                <Route path="/createhotel" element={<CreateHotel/>} />
                <Route path="/"
                    element={
                        isAuthenticated ? (
                            <Navigate to={"/dashboard"} replace></Navigate>
                        ) : (
                            <Navigate to={"/login"} replace></Navigate>
                        )
                    }
                />
                <Route path="/*"
                       element={
                        <MainLayout>
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/rooms" element={<RoomPage></RoomPage>}/>
                                <Route path="/chat" element={<ChatScreen/>} />
                                <Route path="/roomtypes" element={<RoomTypePage/>} />
                                <Route path="/guest" element={<GuestScreen/>} />
                            </Routes>
                        </MainLayout>
                    }
                ></Route>
                <Route path="/createhotel/*" 
                    element={
                        <CreateHotel>
                            <Routes>
                                <Route path="/general_information" element={<CH_GeneralInformation/>}/>
                                <Route path="/property_details" element={<CH_PropertyDetails/>}/>
                                <Route path="/property_policies" element={<CH_PropertyPolicies/>}/>
                                <Route path="/property_facilities" element={<CH_PropertyFacilities/>}/>
                                <Route path="/photos" element={<CH_PhotosInformation/>}/>
                                <Route path="/payment" element={<CH_Payment/>}/>
                            </Routes>
                        </CreateHotel>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
