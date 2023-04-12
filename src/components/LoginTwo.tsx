import React, { useState } from "react";
import { AuthUsers } from "../types/AuthUsers.type";

const Login = () => {
  const [user, setUser] = useState<AuthUsers>({} as AuthUsers);

  const loginUser = () => {
    setUser({
      name: "Gopal Sasmal",
      email: "gopal.sasmal@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={loginUser}>Login</button>
      {user && (
        <>
          <h1>Username {user.name}</h1>
          <h3>User email {user.email}</h3>
        </>
      )}
    </div>
  );
};

export default Login;
