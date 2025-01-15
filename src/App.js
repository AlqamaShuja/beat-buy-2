import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Purchase from './pages/Purchase'
import SignUp from './pages/SignUp'
import Featured from "./components/Featured";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="purchase" element={<Purchase/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/#featured" element={<Featured/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

   
    </div>
  );
}

export default App;
