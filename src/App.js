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

function App() {
    const isAuthenticated = !!localStorage.getItem("token");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/signup" element={<SignUpScreen/>}/>
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
                            </Routes>
                        </MainLayout>
                    }
                ></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
