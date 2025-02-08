import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Purchase from './pages/Purchase'
import SignUp from './pages/SignUp'
import Featured from "./components/Featured";
import Login from "./pages/Login";
import Upcoming from "./components/Upcoming";
import { useSelector } from "react-redux";
import { getUserFromSlice } from "./slices/userSlice";
import User from "./pages/admin/User";
import Event from "./pages/admin/Event";
import EventType from "./components/Admin/EventType";
import EventDetails from "./components/EventDetails";
import TicketDetails from "./components/TicketDetails";
import PurchaseHistory from "./components/PurchaseHistory";
import Profile from "./pages/Profile";
import UserHolder from "./pages/UserHolder";
import ForgotPassword from "./pages/ForgotPassword";
import UpcomingEventPage from "./pages/UpcomingEventPage";
import FeaturedEventPage from "./pages/FeaturedEventPage";
function App() {
  const { isLogin, user } = useSelector(getUserFromSlice)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upcoming" element={<UpcomingEventPage />} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-holder" element={<UserHolder />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/featured" element={<FeaturedEventPage />}/>
        {/* <Route path="/event/:id" element={<EventDetails />} /> */}
        <Route path="/event-details" element={<TicketDetails />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/purchase-history" element={<PurchaseHistory />}/>
        <Route path="/admin" element={<User />}/>
        <Route path="/admin/user" element={<User />}/>
        <Route path="/admin/event" element={<Event />}/>
        <Route path="/admin/event-type" element={<EventType />}/>
      </Routes>
    </div>
  );
}

export default App;
