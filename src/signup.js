import { useState } from "react";
import { signup } from "./auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const result = signup(username, password);
    if (result.success) {
      setMsg("Signup successful!");
      setTimeout(() => navigate("/login"), 1000); // Redirect after success
    } else {
      setMsg(result.message);
    }
  };

  return (
    <div className="admin-login">
      <h2>Sign Up</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Create Account</button>
      <p>{msg}</p>
    </div>
  );
};

export default Signup;
