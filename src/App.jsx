import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/screens/landingPage";
import Login_Form from "./components/screens/login_Form";
import Register_Form from "./components/screens/register_Form";
import Update_Form from "./components/screens/update_Form";
import Updatepass_Form from "./components/screens/updatepass_Form";
import Recover_Pass from "./components/screens/recover_Pass";
import Tutor from "./components/screens/tutor";
import Tutorado from "./components/screens/tutorado";
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
import Contenido_Leccion from "./components/screens/contenido_Leccion";
import Contenido_Ejercicio from "./components/screens/Contenido_Ejercicio";

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
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Student/>
          </ProtectedRoute>
        }/>
        <Route path="/curso/:cursoID" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Curso/>
          </ProtectedRoute>
        }/>
        <Route path="/leccion/:idLeccion/:cursoID/:tipo" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Leccion/>
          </ProtectedRoute>
        }/>
        <Route path="/ejercicio/:idLeccion/:cursoID/:tipo" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Ejercicio/>
          </ProtectedRoute>
        }/>
        {/* Perfiles */}
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Profile/>
          </ProtectedRoute>
        }/>
        <Route path="/profile/progress" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Progress/>
          </ProtectedRoute>
        }/>
        <Route path="/update/user" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Update_Form/>
          </ProtectedRoute>
        }/>
        <Route path="/update/pass" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Updatepass_Form/>
          </ProtectedRoute>
        }/>
        <Route path="/tutor" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Tutor/>
          </ProtectedRoute>
        }/>
        <Route path="/tutorado" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Tutorado/>
          </ProtectedRoute>
        }/>
        {/* Herramientas*/}
        <Route path="/tools" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Tools/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/1" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Tool1/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/2" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Tool2/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/3" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Tool3/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/4" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Tool4/>
          </ProtectedRoute>
        }/>
        <Route path="/tools/5" element={
          <ProtectedRoute allowedRoles={[0,1,2]}>
            <Contenido_Tool5/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App