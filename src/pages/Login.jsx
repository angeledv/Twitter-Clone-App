import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      const user = { username };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  };

  return (
    <div className="content">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <img src="/Twitter-Clone-App/images/Twitter.png" alt="Twitter Logo" />
          <h2>Iniciar Sesión a Twitter</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
