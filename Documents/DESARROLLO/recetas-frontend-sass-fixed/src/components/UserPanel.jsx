import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UserPanel() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="max-w-md mx-auto mt-10 space-y-4">
            <h2 className="text-2x1 font-bold">Panel de Usuario</h2>

            {user ? (
                <>
                    <p><strong>Usuario:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white py-2 px-4 mt-4"
                    ></button>
                </>
            ) : (
                <p>No hay usuario autenticado.</p>
            )}
        </div>
    );
}