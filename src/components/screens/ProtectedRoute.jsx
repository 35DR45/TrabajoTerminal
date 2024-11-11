import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if(!user){
        return <Navigate to="/login" replace />;
    }else{
        return children;
    }
};

export default ProtectedRoute;
