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
import Contenido_Tool1 from "./components/screens/contenido_Tool1";
import Contenido_Tool2 from "./components/screens/contenido_Tool2";
import Contenido_Tool3 from "./components/screens/contenido_Tool3";
import Contenido_Tool4 from "./components/screens/contenido_Tool4";
import Contenido_Tool5 from "./components/screens/contenido_Tool5";
import Profile from "./components/screens/profile";
import Progress from "./components/screens/progress";
import Tools from "./components/screens/tools";
import ProtectedRoute from "./components/screens/ProtectedRoute";

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
        <Route path="/admin" element={<Tutor/>}/>
        {/* TODO: admin screen */}
        <Route path="/student" element={
          <ProtectedRoute>
            <Student/>
          </ProtectedRoute>
        }/>
        <Route path="/curso/:cursoID" element={
          <ProtectedRoute>
            <Contenido_Curso/>
          </ProtectedRoute>
        }/>
        <Route path="/leccion/:idLeccion" element={
          <ProtectedRoute>
            <Contenido_Curso/>
          </ProtectedRoute>
        }/>
        <Route path="/tools" element={
          <ProtectedRoute>
            <Tools/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/1" element={
          <ProtectedRoute>
            <Contenido_Tool1/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/2" element={
          <ProtectedRoute>
            <Contenido_Tool2/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/3" element={
          <ProtectedRoute>
            <Contenido_Tool3/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/4" element={
          <ProtectedRoute>
            <Contenido_Tool4/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/5" element={
          <ProtectedRoute>
            <Contenido_Tool5/>
          </ProtectedRoute>
        }/>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }/>
        <Route path="/profile/progress" element={
          <ProtectedRoute>
            <Progress/>
          </ProtectedRoute>
        }/>
        <Route path="/tutor" element={
          <ProtectedRoute>
            <Tutor/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App