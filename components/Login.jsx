"use client";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Iniciar sesión con:", username, password);
  };

  const ClickBtn_Singunp = (thisGame) => {
    console.log("OPEN SIGNUP");
    alert("OPEN SIGNUP");
  };
  const ClickBtn_Login = (thisGame) => {
    console.log("OPEN LOGIN");
    alert("OPEN LOGIN");
  };

  return (
    <div id="Login">
      <button
        disabled={true}
        type="button"
        className="Transitions Btn_Singup"
        onClick={() => ClickBtn_Singunp()}
      >
        SINGUP
      </button>
      <button
        disabled={true}
        type="button"
        className="Transitions Btn_Login"
        onClick={() => ClickBtn_Login()}
      >
        LOGIN
      </button>
      {/* <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form> */}
    </div>
  );
};

export default Login;
