import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/screens/landingPage";
import Login_Form from "./components/screens/login_Form";
import Register_Form from "./components/screens/register_Form";
import Recover_Pass from "./components/screens/recover_Pass";
import Tutor from "./components/screens/tutor";
import Verified_user from "./components/screens/verified_user";
import Recovery_sent from "./components/screens/recovery_Sent";
import Student from "./components/screens/student";
import Contenido_Curso from "./components/screens/contenido_Curso";
import Profile from "./components/screens/profile";
import Progress from "./components/screens/progress";
import Tools from "./components/screens/tools";

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
        <Route path="/admin" element={<Tutor/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/tools" element={<Tools/>}/>
        <Route path="/profile/progress" element={<Progress/>}/>
        <Route path="/curso/:cursoID" element={<Contenido_Curso/>}/>

      </Routes>
    </BrowserRouter>
  )
}
export default App