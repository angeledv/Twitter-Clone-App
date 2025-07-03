import { useNavigate } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <span>Hola, @{user.username}</span>
      <button onClick={() => navigate("/")}>Inicio</button>
      <button onClick={() => navigate("/profile")}>Mi Perfil</button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
};

export default NavBar;
