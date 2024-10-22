import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/screens/landingPage";
import Login_Form from "./components/screens/login_Form";
import Register_Form from "./components/screens/register_Form";
import Recover_Pass from "./components/screens/recover_Pass";
import Tutor from "./components/screens/tutor";
import Verified_user from "./components/screens/verified_user";
import Recovery_sent from "./components/screens/recovery_Sent";

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register_Form/>}/>
        <Route path="/register/verified" element={<Verified_user/>}/>
        <Route path="/login" element={<Login_Form/>}/>
        <Route path="/forgotten" element={<Recover_Pass/>}/>
        <Route path="/forgotten/sent" element={<Recovery_sent/>}/>
        <Route path="/tutor" element={<Tutor/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App