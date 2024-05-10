import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/screens/landingPage";
import Login_Form from "./components/screens/login_Form";
import Register_Form from "./components/screens/register_Form";
import Recover_Pass from "./components/screens/recover_Pass";

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login_Form/>}/>
        <Route path="/register" element={<Register_Form/>}/>
        <Route path="/forgotten" element={<Recover_Pass/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App