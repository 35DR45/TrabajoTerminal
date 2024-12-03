import { Navigate } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import { UserContext } from "../../UserContext";

const 
ProtectedRoute = ({ children ,allowedRoles}) => {
    const { user } = useContext(UserContext);
    const [isAuthorized, setIsAuthorized] = useState(null); // Estado de autorización
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const fetchAuthorization = async () => {
            try {
                const response = await fetch('/api/validate-role');

                if (!response.ok) {
                    throw new Error('No autorizado');
                }

                const data = await response.json(); // Ejemplo de respuesta: { role: 'admin', id: 'user123' }

                // Verificar si el rol está permitido
                const isRoleAllowed = allowedRoles.includes(data.role);

            

                setIsAuthorized(isRoleAllowed);
            } catch (error) {
                console.error('Error en la validación:', error);
                setIsAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthorization();
    }, [allowedRoles]);

    if (loading) {
        return <div>Cargando...</div>; // Mostrar mientras valida
    }

    if (!isAuthorized) {
        return <Navigate to="/login" replace />; // Redirigir si no está autorizado
    }

    return children; // Renderizar el componente si está autorizado
};

export default ProtectedRoute;
