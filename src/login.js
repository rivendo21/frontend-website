import { useState } from "react";
import { login } from "./auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const result = login(username, password);
    if (result.success) {
      navigate("/");
    } else {
      setMsg(result.message);
    }
  };

  return (
    <div className="admin-login">
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      <p>{msg}</p>
    </div>
  );
};

export default Login;
