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
function App() {
  const { isLogin, user } = useSelector(getUserFromSlice)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/featured" element={<Featured/>}/>
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<User />}/>
        <Route path="/admin/user" element={<User />}/>
        <Route path="/admin/event" element={<Event />}/>
        <Route path="/admin/event-type" element={<EventType />}/>
      </Routes>
    </div>
  );
}

export default App;
