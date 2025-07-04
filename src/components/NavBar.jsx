import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav>
      <span>Hola, @{user.username}</span>
      <div className="btn-container">
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/profile")}>Mi Perfil</button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default NavBar;
