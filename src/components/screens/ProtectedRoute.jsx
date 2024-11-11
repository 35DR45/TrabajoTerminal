import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const ProtectedRoute = ({ children }) => {
    const { loggedUser } = useContext(UserContext);

    return loggedUser ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
