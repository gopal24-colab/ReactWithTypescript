import React, { useState } from "react";
import { AuthUsers } from "../types/AuthUsers.type";

const Login = () => {
  const [user, setUser] = useState<AuthUsers | null>(null);

  const loginUser = () => {
    setUser({
      name: "Gopal Sasmal",
      email: "gopal.sasmal@gmail.com",
    });
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={loginUser}>Login</button>
      <button onClick={logoutUser}>Logout</button>

      {user && (
        <>
          <h1>Username {user?.name}</h1>
          <h3>User email {user?.email}</h3>
        </>
      )}
    </div>
  );
};

export default Login;
