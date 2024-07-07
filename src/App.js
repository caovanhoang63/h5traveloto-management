
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

import React, { useEffect, useState } from "react";
import { RenewToken } from "./api/user_api";
import { Spinner } from "@phosphor-icons/react";
import {GeneralRoomTypes} from "./screens/room-type-screen/general-room-types/general_room_types";
import {
    RoomTypesFacilities
} from "./screens/room-type-screen/facilities_room_types/facilities_room_types";
import {RoomTypesProvider} from "./context/createroomtypes-context";
import BookingManagementPage from "./screens/booking-management-screen/booking-management-page";
import CH_GeneralInformation from "./screens/create-hotel-screen/components/general-information/ch-general-information";
import CH_PropertyDetails from "./screens/create-hotel-screen/components/property-details/ch-property-details";
import CH_PropertyPolicies from "./screens/create-hotel-screen/components/property-policies/ch-property-policies";
import CH_PropertyFacilities from "./screens/create-hotel-screen/components/property-facilities/ch-property-facilities";
import CH_PhotosInformation from "./screens/create-hotel-screen/components/photos-information/ch-photos-information";
import GuestScreen from "./screens/guest-screen/guest-screen";
import socketInstance, {socket } from "./socket-io/index"
import FrontDesk from "./screens/front-desk/front-desk";
import DealScreen from "./screens/deal-screen/deal-screen";
import { HashRouter as Router } from 'react-router-dom';

function App() {
    const refreshToken = localStorage.getItem("refresh-token");
    const [screenName,setScreenName] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        if (refreshToken) {
            RenewToken({ Token: refreshToken })
                .then((data) => {
                    sessionStorage.setItem("access-token", data.data.Token);
                    console.log("Token: ", data.data.Token);
                    setIsAuthenticated(true);
                })
                .catch((error) => {
                    setIsAuthenticated(false);
                    localStorage.removeItem("refresh-token");
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setIsAuthenticated(false);
            setLoading(false);
        }
    }, [refreshToken]);

    return loading ? (
        <Spinner />
    ) : (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route
                    path="/"
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
                                   <Route path="/signup" element={<SignUpScreen />}  />
                                   <Route path="/dashboard" element={<Dashboard />} />
                                   <Route path="/rooms" element={<RoomPage />} />
                                   <Route path="/guest"  element={<GuestScreen/>}/>
                                   <Route path="/chat" element={<ChatScreen />} />
                                   <Route path="/bookingmanagement" element={<BookingManagementPage />} />
                                   <Route path="/roomtypes" element={
                                       <RoomTypesProvider>
                                           <RoomTypePage />
                                       </RoomTypesProvider>
                                   } />
                                   <Route path="/create-general" element={
                                       <RoomTypesProvider>
                                           <GeneralRoomTypes />
                                       </RoomTypesProvider>
                                   } />
                                   <Route path="/create-facilities" element={
                                       <RoomTypesProvider>
                                           <RoomTypesFacilities />
                                       </RoomTypesProvider>
                                   } />
                                   <Route path="/frontdesk" element={<FrontDesk/>}/>
                                   <Route path="/deal" element={<DealScreen/>}/>
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
                                   <Route
                                       path="/"
                                       element={
                                           <Navigate to={"/createhotel/general_information"} replace></Navigate>
                                       }
                                   />
                               </Routes>
                           </CreateHotel>
                       }
                />
            </Routes>
        </Router>
    );
}

export default App;
